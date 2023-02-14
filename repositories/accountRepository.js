import "lib/mongodb";
import { ObjectId } from "mongodb";
import Users from "../models/userModel.js";
import UserTokens from "../models/userTokensModel";

const getUserWithJWT = async function (JWT) {
  const jwt = await import("jsonwebtoken");
  const { userId } = jwt.verify(JWT.toString(), process.env.JWT_SECRET);
  return await Users.findById(userId);
};

const register = async function (email) {
  try {
    let currentUser = await Users.findOne({ email: email });

    //todo: refactor later
    if (!currentUser) {
      currentUser = await Users.create({
        email: email,
      });
    }

    return { user: { email: currentUser.email, id: currentUser._id.toString() } };
  } catch (err) {
    //todo install logger
    return {
      success: false,
      message: `An error occurred while registration`,
    };
  }
};

const verification = async function (jwtToken) {
  try {
    const jwt = await import("jsonwebtoken");

    if (!jwtToken || jwtToken.length < 0) {
      return { success: false, message: "Token not provided" };
    }

    const { userId } = jwt.verify(jwtToken.toString(), process.env.JWT_SECRET);

    const { token } = await UserTokens.findOne({ _id: new ObjectId(userId) });

    const user = await Users.findById(userId);

    if (!user) return { success: false };
    if (token != jwtToken) {
      throw new Error("Tokens not matched.");
    }

    if (user.mailConfirmed != true) {
      // todo: if user account already verified send a a message and don't update
      await Users.findByIdAndUpdate(user._id, { emailConfirmed: true });
    }
    return { success: true };
  } catch (error) {
    return { success: false };
  }
};

export { register, verification, getUserWithJWT };
