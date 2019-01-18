import { validateEmail } from "./helper";
export default function validateUser(user1) {
  let v1 = [],
    count = 0;
  user1.forEach((element1, index) => {
    Object.keys(element1).forEach((element2, index) => {
      v1[count] = element1[element2];
      count++;
    });
  });
  console.log("INPUT IS AS FOLLOWS");
  console.log(v1);
  let valid = [];
  let invalid = [];
  let vc = 0;
  let ic = 0;
  for (let i = 0; i < count; i++) {
    let regex = /^[a-zA-Z0-9_.+-]+@(?:(?:[a-zA-Z0-9-]+\.)?[a-zA-Z]+\.)?(successive)\.tech$/;
    if (regex.test(v1[i])) {
      valid.push(v1[i]);
      vc++;
    } else {
      invalid.push(v1[i]);
      ic++;
    }
  }
  console.log("no of valid users", vc);
  console.log("valid users are as follows", valid);
  console.log("no of invalid users", ic);
  console.log("invalid users are as follows", invalid);
}
