import UserRepository from '../repository/user/UserRepository';
// import { userModel } from 'src/repositorty/user/UserModel';
export default function seedData() {
  const objectRepository = new UserRepository();

  objectRepository.count().then((count) => {
    if (count === 0) {
      console.log('qwertyui', count);
      objectRepository.create({
        email: 'head-trainer@successive.tech',
        name: 'Uday',
        role: 'head-trainer',
      });
      objectRepository.create({
        email: 'head-trainer@successive.tech',
        name: 'Singh',
        role: 'trainee',
      });
    }
  });

  //  const objectRepository = new UserRepository();
  //  objectRepository.create({ id: "5", name: "uday" });
  //  objectRepository.countData();
  //  objectRepository.update({ name: "uday" }, { name: "singh" });
  //  objectRepository.delete({name: "uday" });
  //  objectRepository.view({});
}
