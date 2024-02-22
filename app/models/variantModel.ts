import mongoose, { Document, Schema } from "mongoose";

interface VariantDocument extends Document {
  name: string;
}

const VariantSchema = new Schema<VariantDocument>(
  {
    name: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

const Variant =
  (mongoose.models.Variant as mongoose.Model<VariantDocument>) ||
  mongoose.model<VariantDocument>("Variant", VariantSchema);

export default Variant;
