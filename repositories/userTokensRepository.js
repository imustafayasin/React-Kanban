import "lib/mongodb";
import { ObjectId } from "mongodb";
import UserTokens from "../models/userTokenModel";
export default async function saveUserToken(userId, token) {
  try {
    await UserTokens.findOneAndUpdate(
      { _id: new ObjectId(userId) },
      { token: token },
      { upsert: true }
    );

    return { succes: true };
  } catch (error) {
    return { succes: false };
  }
}
