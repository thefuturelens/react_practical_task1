import mongoose, { Document, Schema } from "mongoose";

interface Attribute {
  _id: string;
  name: string;
}

interface ProductDocument extends Document {
  description: string;
  img: string[];
  sku: string;
  barcode: string;
  productPrice: number;
  salePrice: number;
  slug: string;
  quantity: number;
  name: string;
  defaultCategory: string;
  isActive: boolean;
  attribute: Attribute[];
}

const productSchema = new Schema<ProductDocument>(
  {
    description: { type: String, required: true },
    img: { type: [String] },
    sku: { type: String },
    barcode: { type: String },
    productPrice: { type: Number, required: true },
    salePrice: { type: Number },
    slug: { type: String },
    quantity: { type: Number, required: true },
    name: { type: String, required: true },
    defaultCategory: { type: String },
    isActive: { type: Boolean, required: true },
    attribute: [{ type: Schema.Types.ObjectId, ref: "Attribute" }],
  },
  {
    timestamps: true,
  }
);

const Product =
  (mongoose.models.Product as mongoose.Model<ProductDocument>) ||
  mongoose.model<ProductDocument>("Product", productSchema);

export default Product;
