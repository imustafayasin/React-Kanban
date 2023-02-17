import mongoose from "mongoose";

class SubTask {
  constructor(taskId, name, columnId) {
    this.taskId = taskId;
    this.name = name;
    this.columnId = columnId;
  }
}

var subtaskSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  taskId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Tasks",
  },
  done: {
    type: Boolean,
    default: false,
  },
  columnId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Columns",
  },
});

subtaskSchema.loadClass(SubTask);

export default mongoose.models.SubTasks || mongoose.model("SubTasks", subtaskSchema);
