import mongoose from "mongoose";

class Board {
  columns = [];
  constructor(userId, name) {
    this.userId = userId;
    this.name = name;
  }
  async addColumn(column) {
    if (this.columns.includes(column._id)) return;
    this.columns.push(column);
    await this.save();
  }
}

var boardSchema = new mongoose.Schema(
  {
    name: {
      type: String,
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Users",
    },
    columns: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Columns",
      },
    ],
  },
  { timestamps: true }
);

boardSchema.loadClass(Board);

export default mongoose.models.Boards || mongoose.model("Boards", boardSchema);
