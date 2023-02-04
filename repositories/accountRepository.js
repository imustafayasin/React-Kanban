import GetDatabaseCollection from "lib/mongodb";

const register = async function (email) {
  try {
    const userCollection = await GetDatabaseCollection("users");
    const currentUser = await userCollection.findOne({ email });

    //todo: refactor later
    if (!!currentUser)
      return {
        success: false,
        message: `${email} already used by a another user. `,
      };

    const userObject = {
      email: email,
      mailConfirmed: false,
    };
    await userCollection.insertOne(userObject);
    return { user: { email: userObject.email, id: userObject._id.toString() } };
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

    let userId = jwt.verify(jwtToken.toString(), process.env.JWT_SECRET);
    const userCollection = await GetDatabaseCollection("users");
    const user = await userCollection.findOne({ _id: new ObjectId(userId) });
    if (!user) return { success: false };

    // todo: if user account already verified send a a message and don't update
    await userCollection.findOneAndUpdate(
      { _id: user._id },
      {
        $set: { mailConfirmed: true },
      }
    );

    return { success: true };
  } catch (error) {
    return { success: false };
  }
};

export { register, verification };
