import { NextResponse } from "next/server";

const GEMINI_API_KEY = process.env.GEMINI_API_KEY;
const GEMINI_MODEL = process.env.GEMINI_MODEL || "gemini-flash-latest";
const GEMINI_URL = `https://generativelanguage.googleapis.com/v1beta/models/${GEMINI_MODEL}:generateContent`;

type ChatMessage = {
  role: "user" | "assistant";
  content: string;
};

function buildChecklist(items: string[]) {
  return items.map((item, index) => `${index + 1}. ${item}`).join("\n");
}

function getDemoResponse(prompt: string) {
  const normalized = prompt.toLowerCase();

  if (normalized.includes("sql") || normalized.includes("backend")) {
    return [
      "A strong 4-week backend improvement plan would be:",
      buildChecklist([
        "Learn SQL basics, joins, filtering, aggregation, and subqueries.",
        "Study schema design, primary keys, foreign keys, normalization, and indexing.",
        "Build a REST API with CRUD operations using a simple student or placement dataset.",
        "Deploy the project and practice explaining API design choices in interview language."
      ]),
      "Best project idea: build a placement analytics dashboard with authentication, student records, and recruiter reports."
    ].join("\n\n");
  }

  if (normalized.includes("data analyst") || normalized.includes("analytics")) {
    return [
      "For a data analyst path, focus on four priority areas:",
      buildChecklist([
        "Excel or Google Sheets for cleanup, formulas, and quick reporting.",
        "SQL for joins, aggregations, case statements, and business queries.",
        "Power BI or Tableau for dashboards and storytelling.",
        "One portfolio project using sales, finance, HR, or user-growth data."
      ]),
      "A simple roadmap is 6 to 8 weeks of SQL practice, dashboard building, and one end-to-end case study with business insights."
    ].join("\n\n");
  }

  if (normalized.includes("resume")) {
    return [
      "Keep your resume to one page and make it role-specific.",
      buildChecklist([
        "Start with projects or experience most relevant to the target role.",
        "Use metrics where possible, such as improved speed, users served, or data analyzed.",
        "For software roles, mention stack, deployment, APIs, and collaboration tools.",
        "For analytics roles, mention SQL, dashboards, business questions, and outcomes."
      ]),
      "If you want better shortlisting, align keywords with the exact job description instead of sending one generic resume everywhere."
    ].join("\n\n");
  }

  if (
    normalized.includes("career") ||
    normalized.includes("roadmap") ||
    normalized.includes("learning path")
  ) {
    return [
      "A practical career roadmap should follow this order:",
      buildChecklist([
        "Pick one target role instead of preparing for many unrelated paths.",
        "List the top 5 to 7 required skills for that role.",
        "Measure your current level honestly and identify the biggest gaps.",
        "Build 1 to 2 projects that prove those missing skills.",
        "Add mock interviews, resume refinement, and application tracking."
      ]),
      "If you tell me your target role, current year, and strongest subjects, I can tailor this into a more specific path."
    ].join("\n\n");
  }

  if (normalized.includes("skill gap") || normalized.includes("gap")) {
    return [
      "A good skill-gap analysis compares three things:",
      buildChecklist([
        "Your current skills and proof of work.",
        "Skills expected in the job role you want.",
        "The highest-impact gaps that affect interviews and shortlisting."
      ]),
      "The best next step is to prioritize only 2 or 3 missing skills at a time, then close them with one project and one interview-focused practice cycle."
    ].join("\n\n");
  }

  if (normalized.includes("college") || normalized.includes("course") || normalized.includes("roi")) {
    return [
      "A practical course or college decision should consider:",
      buildChecklist([
        "Total cost including tuition, hostel, travel, and time.",
        "Placement quality, not just placement percentage.",
        "Skill alignment with the job market you care about.",
        "Expected salary and likely break-even period."
      ]),
      "A lower-cost option with stronger outcomes is often better than an expensive brand with weak placement support."
    ].join("\n\n");
  }

  return [
    "I can help with curriculum gaps, project ideas, placement preparation, career planning, resumes, and learning paths.",
    "Try asking something specific like:",
    buildChecklist([
      "Create a roadmap for becoming a frontend developer.",
      "What skills are missing for a data analyst role?",
      "How should I improve my resume for campus placements?",
      "Compare software engineering and cybersecurity as career paths."
    ])
  ].join("\n\n");
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as { messages?: ChatMessage[] };
    const incomingMessages = Array.isArray(body.messages) ? body.messages : [];

    if (!incomingMessages.length) {
      return NextResponse.json({ error: "At least one message is required." }, { status: 400 });
    }

    const latestUserMessage = [...incomingMessages].reverse().find((message) => message.role === "user");

    if (!GEMINI_API_KEY) {
      return NextResponse.json({
        message: getDemoResponse(latestUserMessage?.content || ""),
        model: "demo-fallback",
        mode: "fallback"
      });
    }

    const systemPrompt =
      "You are EdGE AI, an education-to-industry readiness assistant for Indian students and universities. Give accurate, practical, concise answers. When uncertain, say so clearly instead of inventing facts. Focus on curriculum gaps, placement preparation, skills, projects, learning plans, resumes and career guidance.";

    const transcript = incomingMessages
      .map((message) => `${message.role === "assistant" ? "Assistant" : "User"}: ${message.content}`)
      .join("\n\n");

    const response = await fetch(GEMINI_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-goog-api-key": GEMINI_API_KEY
      },
      body: JSON.stringify({
        contents: [
          {
            parts: [
              {
                text: `${systemPrompt}\n\nConversation so far:\n\n${transcript}\n\nRespond to the latest user request helpfully.`
              }
            ]
          }
        ],
        generationConfig: {
          temperature: 0.2
        }
      })
    });

    if (!response.ok) {
      const errorText = await response.text();
      return NextResponse.json({
        message: getDemoResponse(latestUserMessage?.content || ""),
        model: "demo-fallback",
        mode: "fallback",
        warning: `Live model unavailable: ${errorText || response.statusText}`
      });
    }

    const data = (await response.json()) as {
      candidates?: Array<{
        content?: {
          parts?: Array<{ text?: string }>;
        };
      }>;
    };

    const content = data.candidates?.[0]?.content?.parts?.map((part) => part.text || "").join("").trim();

    if (!content) {
      return NextResponse.json(
        { error: "The model returned an empty response. Please try again." },
        { status: 502 }
      );
    }

    return NextResponse.json({ message: content, model: GEMINI_MODEL, mode: "live" });
  } catch (error) {
    return NextResponse.json({
      message: getDemoResponse(""),
      model: "demo-fallback",
      mode: "fallback",
      warning:
        error instanceof Error ? error.message : "Unexpected error while processing chat request."
    });
  }
}
