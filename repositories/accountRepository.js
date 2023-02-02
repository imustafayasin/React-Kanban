import GetDatabaseCollection from "lib/mongodb";

const register = async function (email) {
  try {
    const userCollection = await GetDatabaseCollection("users");
    const currentUser = await userCollection.findOne({ email });

    if (!!currentUser)
      return {
        success: false,
        message: `${email} already used by a another user. `,
      };

    const userObject = {
      email: email,
      mailConfirmed: false,
    };
    const registeredUser = await userCollection.insertOne(userObject);
    return {
      success: true,
      user: { email: registeredUser.email },
      message: "Success! We sent login url to your email!",
    };
  } catch (err) {
    console.log(err);
    return err;
  }
};

export { register };
