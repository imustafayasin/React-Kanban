import mongoose from "mongoose";

class UserTokens {
  constructor(token) {
    this.token = token;
  }
}

var userTokensSchema = new mongoose.Schema(
  {
    token: {
      type: String,
      unique: true,
    },
  },
  { timestamps: true }
);

userTokensSchema.loadClass(UserTokens);

export default mongoose.models.UserTokens ||
  mongoose.model("UserTokens", userTokensSchema);
