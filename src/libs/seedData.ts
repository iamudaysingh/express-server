import UserRepository from "../repositorty/user/UserRepository";
import { userModel } from "src/repositorty/user/UserModel";
export default function seedData() {
  const objectRepository = new UserRepository();
  objectRepository.create({ id: "5", name: "uday" });
 // objectRepository.update({ name: "uday" }, { name: "singh" });
  //objectRepository.delete({name: "uday" });
  objectRepository.view({});
}
