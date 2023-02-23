import mongoose from "mongoose";

class User {
  constructor(email) {
    this.email = email;
  }
}

var userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
    },
    emailConfirmed: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

userSchema.loadClass(User);

export default mongoose.models.Users || mongoose.model("Users", userSchema);
