import mongoose, { Document, Schema } from "mongoose";

interface Variant {
  _id: string;
  name: string;
}

interface Attribute {
  _id: string;
  name: string;
  variant: Variant[];
}

interface AttributeDocument extends Document {
  name: string;
  variant: Variant[];
}

const AttributeSchema = new Schema<AttributeDocument>(
  {
    name: { type: String, required: true },
    variant: [{ type: Schema.Types.ObjectId, ref: "Variant" }],
  },
  {
    timestamps: true,
  }
);

const Attribute =
  (mongoose.models.Attribute as mongoose.Model<AttributeDocument>) ||
  mongoose.model<AttributeDocument>("Attribute", AttributeSchema);

export default Attribute;
