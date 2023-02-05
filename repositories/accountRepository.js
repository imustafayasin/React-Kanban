import GetDatabaseCollection from "lib/mongodb";

const getUserWithJWT = async function (JWT) {
  const userCollection = await GetDatabaseCollection("users");
  const jwt = await import("jsonwebtoken");
  const ObjectId = (await import("mongodb")).ObjectId;

  const { userId } = jwt.verify(JWT.toString(), process.env.JWT_SECRET);
  return await userCollection.findOne({ _id: new ObjectId(userId) });
};

const register = async function (email) {
  try {
    const userCollection = await GetDatabaseCollection("users");
    let currentUser = await userCollection.findOne({ email });

    //todo: refactor later
    if (!currentUser) {
      const userObject = {
        email: email,
        mailConfirmed: false,
      };
      await userCollection.insertOne(userObject);
      currentUser = userObject;
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
    const ObjectId = (await import("mongodb")).ObjectId;

    if (!jwtToken || jwtToken.length < 0) {
      return { success: false, message: "Token not provided" };
    }

    const { userId } = jwt.verify(jwtToken.toString(), process.env.JWT_SECRET);
    const userTokensCollection = await GetDatabaseCollection("userTokens");
    const { token } = await userTokensCollection.findOne({ _id: new ObjectId(userId) });

    const userCollection = await GetDatabaseCollection("users");
    const user = await userCollection.findOne({ _id: new ObjectId(userId) });
    if (!user) return { success: false };
    if (token != jwtToken) {
      throw new Error("Tokens not matched.");
    }

    if (user.mailConfirmed != true) {
      // todo: if user account already verified send a a message and don't update
      await userCollection.findOneAndUpdate(
        { _id: user._id },
        {
          $set: { mailConfirmed: true },
        }
      );
    }
    return { success: true };
  } catch (error) {
    return { success: false };
  }
};

export { register, verification, getUserWithJWT };
