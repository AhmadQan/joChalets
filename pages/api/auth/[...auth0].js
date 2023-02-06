// pages/api/auth/[...auth0].js
import { handleAuth, handleCallback } from "@auth0/nextjs-auth0";
import UserModel from "../../../server/models/userModel";

const getUserFromDB = async (userInfo) => {
  const { name, email } = userInfo;
  const user = await UserModel.findOne({ email: userInfo?.email }).catch(
    (err) => {
      res.status(400).json({ err });
    }
  );

  if (!user) {
    const newUser = await UserModel.create({ name, email }).catch((err) => {
      res.status(400).json({ err });
    });
    return newUser;
  }

  return user;
};

const afterCallback = async (req, res, session, state) => {
  const isUserSavedDB = await getUserFromDB(session.user);

  if (isUserSavedDB) {
    session.user.dbinfo = isUserSavedDB;
  }
  return session;
};

export default handleAuth({
  async callback(req, res) {
    try {
      await handleCallback(req, res, { afterCallback });
    } catch (error) {
      res.status(error.status || 500).end();
    }
  },
});
