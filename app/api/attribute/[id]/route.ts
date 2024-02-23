import connectMongoDB from "@/app/libs/server";
import Attribute from "@/app/models/attributeModel";
import Variant from "@/app/models/variantModel";
import { NextRequest, NextResponse } from "next/server";

export async function PUT(request: NextRequest, { params }: any) {
  const { id } = params;
  const body = await request.json();
  await connectMongoDB();
  await Attribute.findByIdAndUpdate(id, body);
  return NextResponse.json({ message: "Attribute updated" }, { status: 200 });
}

export async function GET(request: NextRequest, { params }: any) {
  const { id } = params;
  await connectMongoDB();
  
  const attribute = await Attribute.findById(id).populate("variant").exec();
  return NextResponse.json({ attribute }, { status: 200 });
}

export async function DELETE(request: NextRequest, { params }: any) {
  const { id } = params;
  await connectMongoDB();
  await Attribute.findByIdAndDelete({ _id: id });
  return NextResponse.json({ message: "Attribute deleted" }, { status: 200 });
}
