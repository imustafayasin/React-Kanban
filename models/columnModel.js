import mongoose from "mongoose";

class Column {
  tasks = [];
  constructor(boardId, name) {
    this.boardId = boardId;
    this.name = name;
  }
  async addTask(task) {
    this.tasks.push(task);
    await this.save();
  }
  async removeTask(task) {
    this.tasks.splice(
      this.tasks.findIndex((t) => t.toString() == task._id.toString()),
      1
    );
    await this.save();
    return {
      task,
      t: this.tasks,
    };
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
