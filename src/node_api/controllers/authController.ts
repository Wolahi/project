import { dataSource } from "../../../ORMconfig";
import { User } from "../models/User";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

const generateAccessToken = (id: any, role: any) => {
  dotenv.config();
  const SECRET = String(process.env.SECRET_JWT_KEY);
  const payload = {
    id,
    role,
  };
  return jwt.sign(payload, SECRET, { expiresIn: "24h" });
};
class AuthController {
  async getUsers(req: any, res: any) {
    try {
      return new Promise(async function (resolve, reject) {
        const users = await dataSource
          .getRepository(User)
          .createQueryBuilder("User")
          .leftJoinAndSelect("User.role", "Role")
          .orderBy("User.id")
          .getMany();
        resolve(users);
      });
    } catch (e) {
      console.log(e);
      res.status(400).json({ message: "GetUsers method error" });
    }
  }
  async login(req: any, res: any) {
    const { email, password } = req.body;
    const condidate = await dataSource.manager.findOneBy(User, {
      email: email,
    });
    if (!condidate) {
      return res.json([{ token: null, res: false }]);
    }
    const validPassword = bcrypt.compareSync(password, condidate.password);
    if (!validPassword) {
      return res.json([{ token: null, res: false }]);
    }
    const token = generateAccessToken(condidate.id, condidate.role);
    return res.json([{ token: token, res: true }]);
  }
  async registration(req: any, res: any) {
    const { email, password, userName } = req.body;
    const condidate = await dataSource.manager.findOneBy(User, {
      email: email,
    });
    if (condidate) {
      return res.json(false);
    }
    const user = new User();
    user.email = email;
    const saltRounds = 7;
    const hashPassword = bcrypt.hashSync(password, saltRounds);
    user.password = hashPassword;
    user.userName = userName;
    user.role = 1;
    await dataSource.manager.save(dataSource.manager.create(User, user));
    res.json(true);
  }
}
export default new AuthController();
