import mongoose from "mongoose";

class Column {
  tasks = [];
  constructor(boardId, name) {
    this.boardId = boardId;
    this.name = name;
  }
  async addTask(task) {
    if (this.tasks.includes(task._id)) return;
    this.tasks.push(task);
    await this.save();
  }
}

var columnSchema = new mongoose.Schema(
  {
    name: {
      type: String,
    },
    boardId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Boards",
    },
    tasks: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Tasks",
      },
    ],
  },
  { timestamps: true }
);

columnSchema.loadClass(Column);

export default mongoose.models.Columns || mongoose.model("Columns", columnSchema);
