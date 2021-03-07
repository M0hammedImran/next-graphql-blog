import { ObjectId } from 'mongoose';

export interface user {
  _id?: ObjectId | string;
  email?: string;
  fullName?: string;
  phone?: string;
  password?: string;
  state?: string;
  city?: string;
  landmark?: string;
  country?: string;
  address1?: string;
  address2?: string;
  isDeleted?: boolean;
  isEmailVerified?: boolean;
  createdAt?: string | Date;
  updatedAt?: string | Date;
}
