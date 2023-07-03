import { dataSource } from "../../ORMconfig";

export const createConnection = async () => {
  await dataSource.initialize();
};
