import mongoose from "mongoose";

class Task {
  constructor(columnId, name) {
    this.columnId = columnId;
    this.name = name;
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
});

taskSchema.loadClass(Task);

export default mongoose.models.Tasks || mongoose.model("Tasks", taskSchema);
