import connectMongoDB from "@/app/libs/server";
import Attribute from "@/app/models/attributeModel";
import { NextResponse, NextRequest } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    await connectMongoDB();
    await Attribute.create(body);
    return NextResponse.json({ message: "Attribute Added" }, { status: 201 });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function GET() {
  await connectMongoDB();
  const attributes = await Attribute.find().populate('variant').exec();
  return NextResponse.json({ attributes });
}
