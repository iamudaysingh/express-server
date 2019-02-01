import UserRepository from "../repositorty/user/UserRepository";
import { userModel } from "src/repositorty/user/UserModel";
export default function seedData() {
  const objectRepository = new UserRepository();

  objectRepository.count().then((count) => { if(count==0){
    console.log("qwertyui",count)
    objectRepository.create({
      name : "Uday",
      role: "head-trainer",
      email: "head-trainer@successive.tech"

    });
    objectRepository.create({
      name : "Singh",
      role: "trainee",
      email: "head-trainer@successive.tech"

    });
  }
  });

  //   const objectRepository = new UserRepository();
  //   objectRepository.create({ id: "5", name: "uday" });
  //   //objectRepository.countData();
  //  // objectRepository.update({ name: "uday" }, { name: "singh" });
  //   objectRepository.delete({name: "uday" });
  //objectRepository.view({});
}
