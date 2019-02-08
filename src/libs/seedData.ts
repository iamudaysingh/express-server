import * as bcrypt from 'bcrypt';
import UserRepository from '../repository/user/UserRepository';
export default function seedData() {
console.log('inside', process.env.PASSWORD );
const saltRounds = 10;
const hash = bcrypt.hashSync(process.env.PASSWORD, saltRounds);
console.log('hi', hash);
UserRepository.count().then((count) => {
    if (count === 0) {
      console.log('qwertyui', count);
      UserRepository.create({
        email: 'head-trainer@successive.tech',
        name: 'Uday',
        password: hash,
        role: 'head-trainer',
      });
      UserRepository.create({
        email: 'head-trainee@successive.tech',
        name: 'Singh',
        password: hash,
        role: 'trainee',
      });
    }
  });
  // Direct Calling Check
  //  const objectRepository = new UserRepository();
  //  objectRepository.create({ id: "5", name: "uday" });
  //  objectRepository.countData();
  //  objectRepository.update({ name: "uday" }, { name: "singh" });
  //  objectRepository.delete({name: "uday" });
  //  objectRepository.view({});
}
