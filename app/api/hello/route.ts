import { allPages } from "contentlayer/generated";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  return NextResponse.json({
    status: 200,
    message: "Success",
    total: allPages.length,
    data: allPages,
  });
}
