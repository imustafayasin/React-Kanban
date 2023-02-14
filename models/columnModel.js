import mongoose from "mongoose";

class Column {
  tasks = [];
  constructor(boardId, name) {
    this.boardId = boardId;
    this.name = name;
  }
  addTask(task) {
    this.tasks.push(task);
    this.save();
  }
}

var columnSchema = new mongoose.Schema({
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
});

columnSchema.loadClass(Column);

export default mongoose.models.Columns || mongoose.model("Columns", columnSchema);
