import mongoose from "mongoose";

class Column {
  constructor(boardId, name) {
    this.boardId = boardId;
    this.name = name;
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
});

columnSchema.loadClass(Column);

export default mongoose.models.Columns || mongoose.model("Columns", columnSchema);
