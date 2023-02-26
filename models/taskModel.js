import mongoose from "mongoose";

class Task {
  subTasks = [];
  constructor(columnId, name, description) {
    this.columnId = columnId;
    this.name = name;
    this.description = description;
  }
  async setSubTasks(subtask) {
    this.subTasks = subtask;
    await this.save();
  }
  async addSubTask(subtask) {
    if (this.subTasks.includes(subtask._id)) return;
    this.subTasks.push(subtask);
    await this.save();
  }
  async updateColumn(columnId) {
    if (!columnId) return;
    this.columnId = columnId;
    this.save();
  }
  async removeSubtask(subtask) {
    if (!this.subTasks.includes(subtask._id)) return;
    this.subTasks.splice(
      this.subTasks.findIndex((t) => t == subtask._id),
      1
    );
    await this.save();
  }
}

var taskSchema = new mongoose.Schema(
  {
    name: {
      type: String,
    },
    columnId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Columns",
    },
    description: String,
    subTasks: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "SubTasks",
      },
    ],
  },
  { timestamps: true }
);

taskSchema.loadClass(Task);

export default mongoose.models.Tasks || mongoose.model("Tasks", taskSchema);
