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
class AuthController {
  async getUser(req: any, res: any) {
    const tokenPayload = jwt.verify(req.token, SECRET);
    return res.json([{ token: tokenPayload }]);
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
    const role = await dataSource.manager.findOneBy(Role, {
      id: condidate.role,
    });
    const token = generateAccessToken(
      condidate.id,
      role?.role,
      condidate.userName,
      condidate.email,
    );
    const tokenPayload = jwt.verify(token, SECRET);
    return res.json([{ token: tokenPayload, res: true }]);
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
