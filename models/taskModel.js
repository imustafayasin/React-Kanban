import mongoose from "mongoose";

class Task {
  subTasks = [];
  constructor(columnId, name, description) {
    this.columnId = columnId;
    this.name = name;
    this.description = description;
  }
  addSubTask(subtask) {
    this.subTasks.push(subtask);
    this.save();
  }
}

var taskSchema = new mongoose.Schema({
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
});

taskSchema.loadClass(Task);

export default mongoose.models.Tasks || mongoose.model("Tasks", taskSchema);
