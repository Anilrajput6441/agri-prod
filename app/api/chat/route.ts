import { NextResponse } from "next/server";

const SILICONFLOW_API_URL = "https://api.siliconflow.com/v1/chat/completions";
const DEFAULT_MODEL =
  process.env.SILICONFLOW_MODEL ?? "Qwen/Qwen2.5-7B-Instruct";

type ChatMessage = {
  role: "system" | "user" | "assistant";
  content: string;
};

type ChatRequestBody = {
  messages?: ChatMessage[];
  model?: string;
};

export async function POST(request: Request) {
  const apiKey = process.env.SILICONFLOW_API_KEY;

  if (!apiKey) {
    return NextResponse.json(
      { error: "Missing SILICONFLOW_API_KEY environment variable." },
      { status: 500 }
    );
  }

  let body: ChatRequestBody;

  try {
    body = (await request.json()) as ChatRequestBody;
  } catch {
    return NextResponse.json(
      { error: "Invalid JSON body." },
      { status: 400 }
    );
  }

  const messages = body.messages?.filter(
    (message) =>
      message &&
      ["system", "user", "assistant"].includes(message.role) &&
      typeof message.content === "string" &&
      message.content.trim().length > 0
  );

  if (!messages || messages.length === 0) {
    return NextResponse.json(
      {
        error:
          "Request body must include a non-empty messages array with valid chat messages.",
      },
      { status: 400 }
    );
  }

  const upstreamResponse = await fetch(SILICONFLOW_API_URL, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model: body.model ?? DEFAULT_MODEL,
      messages,
    }),
  });

  const data = await upstreamResponse.json().catch(() => null);

  if (!upstreamResponse.ok) {
    return NextResponse.json(
      {
        error: "SiliconFlow request failed.",
        details: data,
      },
      { status: upstreamResponse.status }
    );
  }

  return NextResponse.json(data);
}
