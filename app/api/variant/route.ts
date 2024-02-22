import connectMongoDB from "@/app/libs/server";
import Variant from "@/app/models/variantModel";
import { NextResponse, NextRequest } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    await connectMongoDB();
    await Variant.create(body);
    return NextResponse.json({ message: "Variant Added" }, { status: 201 });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function GET() {
  await connectMongoDB();
  const variant = await Variant.find();
  return NextResponse.json({ variant });
}
