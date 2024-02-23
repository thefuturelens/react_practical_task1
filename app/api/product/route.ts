import connectMongoDB from "@/app/libs/server";
import Product from "@/app/models/productModel";
import { NextResponse, NextRequest } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    await connectMongoDB();
    await Product.create(body);
    return NextResponse.json({ message: "Product Added" }, { status: 201 });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function GET() {
  await connectMongoDB();
  const products = await Product.find()
    .populate({
      path: "attribute",
      populate: { path: "variant" },
    })
    .exec();
  return NextResponse.json({ products });
}
