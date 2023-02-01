import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI;
const options = {
  useUnifiedTopology: true,
  useNewUrlParser: true,
};

if (!process.env.MONGODB_URI) {
  throw new Error("Add Mongo URI to .env.local");
}

let mongoClient = new MongoClient(uri, options);
let clientPromise = mongoClient.connect();

async function GetDatabaseCollection(collectionName) {
  try {
    const mongoDBConnection = await clientPromise;
    const dbCollection = await mongoDBConnection
      .db(process.env.DATABASE_NAME)
      .collection(collectionName);
    return dbCollection;
  } catch (error) {
    console.error(error);
  }
}
export default GetDatabaseCollection;
