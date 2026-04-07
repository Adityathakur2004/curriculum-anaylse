import { NextResponse } from "next/server";

const OPENROUTER_URL = "https://openrouter.ai/api/v1/chat/completions";
const DEFAULT_MODEL = process.env.OPENROUTER_MODEL || "openrouter/free";

type ChatMessage = {
  role: "user" | "assistant";
  content: string;
};

function getDemoResponse(prompt: string) {
  const normalized = prompt.toLowerCase();

  if (normalized.includes("sql") || normalized.includes("backend")) {
    return `Demo mode: A good 4-week plan is 1) SQL basics and joins, 2) schema design and indexing, 3) build a REST API with CRUD, 4) deploy a small backend project. Pair this with one placement-style project like a student analytics dashboard. Add OPENROUTER_API_KEY for live AI responses.`;
  }

  if (normalized.includes("data analyst") || normalized.includes("analytics")) {
    return `Demo mode: For a data analyst path, focus on Excel, SQL, Power BI/Tableau, and one portfolio project using real business data. Strong communication and dashboard storytelling are as important as tools. Add OPENROUTER_API_KEY for live AI responses.`;
  }

  if (normalized.includes("resume")) {
    return `Demo mode: Keep your resume one page, lead with projects, quantify outcomes, and match keywords to the role you want. For software roles, highlight stack, deployment, and collaboration; for analytics roles, highlight SQL, dashboards, and business impact. Add OPENROUTER_API_KEY for live AI responses.`;
  }

  if (normalized.includes("career") || normalized.includes("roadmap")) {
    return `Demo mode: Choose one target role first, compare your current skills with role expectations, then commit to a 6- to 8-week roadmap with projects, mock interviews, and measurable milestones. Add OPENROUTER_API_KEY for live AI responses.`;
  }

  return `Demo mode: EdGE AI can help with curriculum gaps, project ideas, placement prep, career planning, and learning paths. Add OPENROUTER_API_KEY in .env.local to switch from demo responses to a live free AI model through OpenRouter.`;
}

export async function POST(request: Request) {
  const apiKey = process.env.OPENROUTER_API_KEY;

  try {
    const body = (await request.json()) as { messages?: ChatMessage[] };
    const incomingMessages = Array.isArray(body.messages) ? body.messages : [];

    if (!incomingMessages.length) {
      return NextResponse.json({ error: "At least one message is required." }, { status: 400 });
    }

    const latestUserMessage = [...incomingMessages].reverse().find((message) => message.role === "user");

    if (!apiKey) {
      return NextResponse.json({
        message: getDemoResponse(latestUserMessage?.content || ""),
        model: "demo-fallback"
      });
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
