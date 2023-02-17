import mongoose from "mongoose";

class Task {
  subTasks = [];
  constructor(columnId, name, description) {
    this.columnId = columnId;
    this.name = name;
    this.description = description;
  }
  setSubTasks(subtask) {
    if (this.subTasks.includes(subtask._id)) return;
    this.subTasks = subtask;
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
