import mongoose, { Document, Schema } from "mongoose";

interface Attribute {
  _id: string;
  name: string;
}

interface AttributeDocument extends Document {
  name: string;
  category: Attribute[];
  variants: any[]; // Define the type for variants as needed
}

const VariantSchema = new Schema<Attribute>({
  _id: String,
  name: { type: String, required: true },
});

const AttributeSchema = new Schema<AttributeDocument>(
  {
   
    name: { type: String, required: true },
    category: { type: [VariantSchema], required: true },
    variants: { type: [] }, // Define the type for variants as needed
  },
  {
    timestamps: true,
  }
);

const Attribute =
  (mongoose.models.Attribute as mongoose.Model<AttributeDocument>) ||
  mongoose.model<AttributeDocument>("Attribute", AttributeSchema);

export default Attribute;
