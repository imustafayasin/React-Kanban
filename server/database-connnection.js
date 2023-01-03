import mongoose from "mongoose";

const connectionString = 'mongodb://localhost:27017/Kanban';

mongoose
    .connect(connectionString, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => console.log('Database connection established.'))
    .catch(console.log)

export default mongoose.connections