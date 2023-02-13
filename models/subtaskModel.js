import mongoose from "mongoose";

class SubTask {
  constructor(taskId, name) {
    this.taskId = taskId;
    this.name = name;
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
});

subtaskSchema.loadClass(SubTask);

export default mongoose.models.SubTasks || mongoose.model("SubTasks", subtaskSchema);
