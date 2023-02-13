import mongoose from "mongoose";

class Board {
  constructor(userId, name) {
    this.userId = userId;
    this.name = name;
  }
}

var boardSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Users",
  },
});

boardSchema.loadClass(Board);

export default mongoose.models.Boards || mongoose.model("Boards", boardSchema);
