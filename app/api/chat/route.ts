import { NextResponse } from "next/server";

const OPENROUTER_URL = "https://openrouter.ai/api/v1/chat/completions";
const DEFAULT_MODEL = process.env.OPENROUTER_MODEL || "openrouter/free";

type ChatMessage = {
  role: "user" | "assistant";
  content: string;
};

export async function POST(request: Request) {
  const apiKey = process.env.OPENROUTER_API_KEY;

  if (!apiKey) {
    return NextResponse.json(
      {
        error:
          "Missing OPENROUTER_API_KEY. Add it to your environment before using the chatbot."
      },
      { status: 500 }
    );
  }

  try {
    const body = (await request.json()) as { messages?: ChatMessage[] };
    const incomingMessages = Array.isArray(body.messages) ? body.messages : [];

    if (!incomingMessages.length) {
      return NextResponse.json({ error: "At least one message is required." }, { status: 400 });
    }

    const messages = [
      {
        role: "system",
        content:
          "You are EdGE AI, an education-to-industry readiness assistant for Indian students and universities. Give accurate, practical, concise answers. When uncertain, say so clearly instead of inventing facts. Focus on curriculum gaps, placement preparation, skills, projects, learning plans, resumes and career guidance."
      },
      ...incomingMessages
    ];

    const response = await fetch(OPENROUTER_URL, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
        "HTTP-Referer": process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000",
        "X-Title": "EdGE Platform"
      },
      body: JSON.stringify({
        model: DEFAULT_MODEL,
        messages,
        temperature: 0.2
      })
    });

    if (!response.ok) {
      const errorText = await response.text();
      return NextResponse.json(
        { error: `Model request failed: ${errorText || response.statusText}` },
        { status: response.status }
      );
    }

    const data = (await response.json()) as {
      choices?: Array<{ message?: { content?: string } }>;
    };

    const content = data.choices?.[0]?.message?.content?.trim();

    if (!content) {
      return NextResponse.json(
        { error: "The model returned an empty response. Please try again." },
        { status: 502 }
      );
    }

    return NextResponse.json({ message: content, model: DEFAULT_MODEL });
  } catch (error) {
    return NextResponse.json(
      {
        error:
          error instanceof Error ? error.message : "Unexpected error while processing chat request."
      },
      { status: 500 }
    );
  }
}
