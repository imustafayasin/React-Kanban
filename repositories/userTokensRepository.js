import GetDatabaseCollection from "lib/mongodb";
export default async function saveUserToken(userId, token) {
  try {
    const userTokensTable = await GetDatabaseCollection("userTokens");
    const ObjectId = (await import("mongodb")).ObjectId;

    await userTokensTable.findOneAndUpdate(
      { _id: new ObjectId(userId) },
      { $set: { token: token } },
      { upsert: true }
    );

    return { succes: true };
  } catch (error) {
    return { succes: false };
  }
}
