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
  async removeColumn(column) {
    if (!this.columns.includes(column._id)) return;
    this.columns.splice(this.columns.indexOf(column), 1);
    await this.save();
  }
  async update(name) {
    if (this.name == name) return;
    this.name = name ?? this.name;
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
