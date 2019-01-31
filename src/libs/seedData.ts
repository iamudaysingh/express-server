import UserRepository from "../repositorty/user/UserRepository";
export default function seedData() {
const repositorty = new UserRepository().create({id: "5", name: "uday"});
const repositorty1 = new UserRepository().view({id: "5", name: "uday"});
//const repositorty2 = new UserRepository().countData({});
// const data= {
//   id:1,
//   name:"dfghj"
// }
// console.log("1234567890")
// let arr = [];
// arr.push(Object.keys(data));
// console.log(arr);
// console.log(arr.length)
// for(let i=0;i<arr.length;i++)
// {
// console.log("qwertyu",arr[i]);
// repositorty.create(data);
// }
}
