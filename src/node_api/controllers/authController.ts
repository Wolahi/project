import { dataSource } from "../../../ORMconfig";
import { User } from "../models/User";

class AuthController {
  async getUsers(req: any, res: any) {
    try {
      const result = new Promise(async function (resolve, reject) {
        const users = await dataSource
          .getRepository(User)
          .createQueryBuilder("User")
          .leftJoinAndSelect("User.role", "Role")
          .orderBy("User.id")
          .getMany();
        resolve(users);
      });
      result.then((result) => {
        res.status(200).json(result);
      });
    } catch (e) {
      console.log(e);
      res.status(400).json({ message: "GetUsers method error" });
    }
  }
  async login(req: any, res: any) {
    return new Promise(async function (resolve, reject) {});
  }
  async registration(req: any, res: any) {
    new Promise(async function (resolve, reject) {
      const {email, password, userName} = req.body;
      const condidate = await dataSource.manager.findOneBy(User, {
        email: email,
      });
      if (condidate) {
        resolve(false);
      }
      const user = new User();
      user.email = email;
      user.password = password;
      user.userName = userName;
      user.role = 1;
      await dataSource.manager.save(dataSource.manager.create(User, user));
      resolve(true);
    });
  }
}
export default new AuthController();
