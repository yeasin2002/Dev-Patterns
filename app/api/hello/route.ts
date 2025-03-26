import { allPatterns, allPrinciples } from "contentlayer/generated";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  return NextResponse.json({
    status: 200,
    message: "Success",

    prince: allPrinciples,
    patterns: allPatterns,
  });
}
