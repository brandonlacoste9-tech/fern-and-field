import { NextResponse } from "next/server";
import { buildUcpProfile, CORS } from "@/lib/ucp";

export async function OPTIONS(req: Request) {
  return new NextResponse(null, { status: 204, headers: CORS });
}

export async function GET(req: Request) {
  const origin = new URL(req.url).origin;
  return NextResponse.json(buildUcpProfile(origin), { headers: CORS });
}
