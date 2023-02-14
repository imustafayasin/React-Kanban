import mongoose from "mongoose";

const uri = process.env.MONGODB_URI;
const options = {
  useUnifiedTopology: true,
  useNewUrlParser: true,
};
if (!process.env.MONGODB_URI) {
  throw new Error("Add Mongo URI to .env.local");
}
export default mongoose.connect(uri, options).catch((err) => console.log(err));
