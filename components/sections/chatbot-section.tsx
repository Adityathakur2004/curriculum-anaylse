"use client";

import { FormEvent, useState } from "react";
import { Bot, Loader2, SendHorizontal } from "lucide-react";
import { starterPrompts } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/ui/section-heading";

type ChatMessage = {
  role: "user" | "assistant";
  content: string;
};

type ChatApiResponse = {
  message?: string;
  error?: string;
  model?: string;
  mode?: "live" | "fallback";
  warning?: string;
};

const initialMessages: ChatMessage[] = [
  {
    role: "assistant",
    content:
      "I’m EdGE AI. Ask me about curriculum gaps, placement prep, role readiness, projects, resumes, or a personalized learning plan."
  }
];

export function ChatbotSection() {
  const [messages, setMessages] = useState<ChatMessage[]>(initialMessages);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [chatMode, setChatMode] = useState<"live" | "fallback">("fallback");
  const [chatWarning, setChatWarning] = useState("");

  async function sendMessage(prompt?: string) {
    const content = (prompt ?? input).trim();

    if (!content || isLoading) {
      return;
    }

    const nextMessages = [...messages, { role: "user" as const, content }];
    setMessages(nextMessages);
    setInput("");
    setError("");
    setIsLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ messages: nextMessages })
      });

      const data = (await response.json()) as ChatApiResponse;

      if (!response.ok || !data.message) {
        throw new Error(data.error || "Unable to get a response right now.");
      }

      setChatMode(data.mode || "fallback");
      setChatWarning(data.warning || "");
      setMessages((current) => [...current, { role: "assistant", content: data.message as string }]);
    } catch (requestError) {
      setError(
        requestError instanceof Error
          ? requestError.message
          : "Something went wrong while contacting the AI service."
      );
    } finally {
      setIsLoading(false);
    }
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    await sendMessage();
  }

  return (
    <section id="chatbot" className="container-shell py-20">
      <div className="grid gap-8 lg:grid-cols-[0.88fr_1.12fr]">
        <div className="space-y-6">
          <SectionHeading
            eyebrow="AI chatbot"
            title="Let students and universities ask EdGE questions in plain language"
            description="This section is wired for free AI routing through OpenRouter so visitors can get guidance on skill gaps, placement prep, project ideas and learning plans right inside the site."
          />
          <div className="panel p-6">
            <p className="font-semibold">What it can help with</p>
            <div className="mt-4 space-y-3 text-sm leading-7 text-muted-foreground">
              <p>Curriculum-to-role gap explanations with practical next steps.</p>
              <p>Personalized weekly learning paths for software, data and product roles.</p>
              <p>Resume, placement and project suggestions for Indian campus hiring contexts.</p>
            </div>
            <p className="mt-5 text-xs leading-6 text-muted-foreground">
              Accuracy note: free models can still make mistakes. The assistant is instructed to be careful,
              but it should not be treated as a source of guaranteed truth for high-stakes decisions.
            </p>
          </div>
          <div className="panel p-6">
            <p className="font-semibold">Starter prompts</p>
            <div className="mt-4 flex flex-wrap gap-3">
              {starterPrompts.map((prompt) => (
                <button
                  key={prompt}
                  type="button"
                  onClick={() => sendMessage(prompt)}
                  className="rounded-full border border-border bg-background px-4 py-2 text-left text-sm text-muted-foreground transition hover:border-primary/40 hover:text-foreground"
                >
                  {prompt}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="panel flex min-h-[620px] flex-col overflow-hidden">
          <div className="flex items-center justify-between border-b border-border/70 px-6 py-5">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary text-primary-foreground">
                <Bot className="h-5 w-5" />
              </div>
              <div>
                <p className="font-semibold">EdGE AI Assistant</p>
                <p className="text-sm text-muted-foreground">
                  {chatMode === "live" ? "Live AI guidance" : "Smart offline guidance"}
                </p>
              </div>
            </div>
            <div
              className={
                chatMode === "live"
                  ? "rounded-full bg-success/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-success"
                  : "rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-primary"
              }
            >
              {chatMode === "live" ? "Live" : "Fallback"}
            </div>
          </div>

          <div className="flex-1 space-y-4 overflow-y-auto px-6 py-6">
            {chatMode === "fallback" ? (
              <div className="rounded-[24px] border border-primary/20 bg-primary/5 px-5 py-4 text-sm leading-7 text-muted-foreground">
                The chatbot is using built-in EdGE guidance right now. Add `OPENROUTER_API_KEY` in
                `.env.local` if you want live AI model responses.
              </div>
            ) : null}

            {chatWarning ? (
              <div className="rounded-[24px] border border-danger/20 bg-danger/5 px-5 py-4 text-sm leading-7 text-danger">
                {chatWarning}
              </div>
            ) : null}

            {messages.map((message, index) => (
              <div
                key={`${message.role}-${index}`}
                className={message.role === "assistant" ? "mr-8" : "ml-8"}
              >
                <div
                  className={
                    message.role === "assistant"
                      ? "rounded-[24px] bg-muted px-5 py-4 text-sm leading-7 text-foreground"
                      : "rounded-[24px] bg-primary px-5 py-4 text-sm leading-7 text-primary-foreground"
                  }
                >
                  {message.content}
                </div>
              </div>
            ))}

            {isLoading ? (
              <div className="mr-8 rounded-[24px] bg-muted px-5 py-4 text-sm text-muted-foreground">
                <span className="inline-flex items-center gap-2">
                  <Loader2 className="h-4 w-4 animate-spin" />
                  Thinking through your request...
                </span>
              </div>
            ) : null}
          </div>

          <div className="border-t border-border/70 px-6 py-5">
            <form onSubmit={handleSubmit} className="space-y-3">
              <textarea
                value={input}
                onChange={(event) => setInput(event.target.value)}
                rows={4}
                placeholder="Ask about placement skills, curriculum gaps, project ideas, resumes, or a learning plan..."
                className="w-full rounded-[24px] border border-border bg-background px-5 py-4 text-sm outline-none transition focus:border-primary"
              />
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <p className="text-xs text-danger">{error}</p>
                <Button>
                  Send message
                  <SendHorizontal className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
