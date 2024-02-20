import mongoose, { Document, Schema } from "mongoose";

interface Category {
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
  category: Category[];
  defaultCategory: string;
  isActive: boolean;
  variants: any[]; // Define the type for variants as needed
}

const categorySchema = new Schema<Category>({
  _id: String,
  name: { type: String, required: true },
});

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
    category: { type: [categorySchema], required: true },
    defaultCategory: { type: String },
    isActive: { type: Boolean, required: true },
    variants: { type: [] }, // Define the type for variants as needed
  },
  {
    timestamps: true,
  }
);

const Product =
  (mongoose.models.Product as mongoose.Model<ProductDocument>) ||
  mongoose.model<ProductDocument>("Product", productSchema);

export default Product;
