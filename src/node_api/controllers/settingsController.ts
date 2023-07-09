import { dataSource } from "../../../ORMconfig";
import { User } from "../models/User";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import { Role } from "../models/Role";

const SECRET = String(process.env.SECRET_JWT_KEY);
const generateAccessToken = (id: any, role: any, userName: any, email: any) => {
  dotenv.config();
  const payload = {
    id,
    role,
    userName,
    email,
  };

  return jwt.sign(payload, SECRET, { expiresIn: "24h" });
};
class SettingsController {
  async ChangeEmail(req: any, res: any) {
    const { userEmail, changedEmail } = req.body;
    const condidate = await dataSource.manager.findOneBy(User, {
      email: changedEmail,
    });
    if (condidate) {
      return res.json([{ token: null, res: false }]);
    }
    const user = await dataSource.manager.findOneBy(User, {
      email: userEmail,
    });
    if (user != undefined) {
      user.email = changedEmail;
      const role = await dataSource.manager.findOneBy(Role, {
        id: user.role,
      });
      await dataSource.manager.save(User, user);
      const token = generateAccessToken(user.id, role?.role, user.userName, user.email);
      const tokenPayload = jwt.verify(token, SECRET);
      return res.json([{ token: tokenPayload, res: true }]);
    }

    return res.json([{ token: null, res: false }]);
  }
  async ChangeUserName(req: any, res: any) {
    const { userName, changedUserName } = req.body;
    const condidate = await dataSource.manager.findOneBy(User, {
      userName: changedUserName,
    });
    if (condidate) {
      return res.json([{ token: null, res: false }]);
    }
    const user = await dataSource.manager.findOneBy(User, {
      userName: userName,
    });
    if (user != undefined) {
      user.userName = changedUserName;
      const role = await dataSource.manager.findOneBy(Role, {
        id: user.role,
      });
      await dataSource.manager.save(User, user);
      const token = generateAccessToken(user.id, role?.role, user.userName, user.email);
      const tokenPayload = jwt.verify(token, SECRET);
      return res.json([{ token: tokenPayload, res: true }]);
    }

    return res.json([{ token: null, res: false }]);
  }
  async ChangeUserPassword(req: any, res: any) {}
  async DeletedAcc(req: any, res: any) {
    const { userId } = req.body;
    const condidate = await dataSource.manager.findOneBy(User, {
      id: userId,
    });
    if (condidate) {
      await dataSource.manager.delete(User, userId);
      return res.json([{ res: true }]);
    }
    return res.json([{ res: false }]);
  }
}
export default new SettingsController();
