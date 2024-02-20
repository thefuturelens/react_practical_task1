import connectMongoDB from "@/app/libs/server";
import Product from "@/app/models/productModel";
import { NextRequest, NextResponse } from "next/server";

export async function PUT(request: NextRequest, { params }: any) {
  const { id } = params;
  const body = await request.json();
  await connectMongoDB();
  await Product.findByIdAndUpdate(id, body);
  return NextResponse.json({ message: "Product updated" }, { status: 200 });
}

export async function GET(request: NextRequest, { params }: any) {
  const { id } = params;
  await connectMongoDB();
  const product = await Product.findOne({ _id: id });
  return NextResponse.json({ product }, { status: 200 });
}

export async function DELETE(request: NextRequest, { params }: any) {
  const { id } = params;
  await connectMongoDB();
  await Product.findByIdAndDelete({ _id: id });
  return NextResponse.json({ message: "Product deleted" }, { status: 200 });
}
