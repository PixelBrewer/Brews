// app/api/brews/route.ts
import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export async function GET(req: NextRequest) {
  try {
    const brews = await prisma.coffee_beans.findMany();
    return NextResponse.json(brews, { status: 200 });
  } catch (error) {
    console.error("Error fetching brews:", error);
    return NextResponse.json(
      { error: "Error fetching brews" },
      { status: 500 }
    );
  }
}
