import { model, Document, Schema, models } from 'mongoose';
import { user } from '@/intefaces/User';

const MODEL_NAME = 'user';
const UserSchema = new Schema<Document<user>>(
  {
    email: { type: String, required: [true, 'Email is Required'], trim: true },
    fullName: {
      type: String,
      required: [true, 'Name is Required'],
      trim: true,
    },
    phone: { type: Number, required: false },
    password: { type: String, required: [true, 'Password is Required'] },
    isDeleted: { type: Boolean, default: false },
    state: { type: String, required: false },
    city: { type: String, required: false },
    landmark: { type: String, required: false },
    country: { type: String, required: false },
    address1: { type: String, required: false },
    address2: { type: String, required: false },
    emailVerified: { type: Boolean, default: false },
  },
  { timestamps: true }
);

export default models.user || model(MODEL_NAME, UserSchema);
