import mongoose, { Document } from 'mongoose';

export default async function DbConnection() {
  if (mongoose.connection.readyState >= 1) return;

  return mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: true,
  });
}

export function jsonify(obj: Document[]) {
  return JSON.parse(JSON.stringify(obj));
}

let _global = global as any;
export async function dbMiddleware() {
  try {
    if (!_global.mongoose) {
      _global.mongoose = DbConnection();
    }
  } catch (error) {
    console.log(error);
  }
}
