const user = [
  {
    traineeEmail: "trainee1@successive.tech",
    reviewerEmail: "reviewer1@successive.tech",
    meraEmail: "tgxcsdu@cdbhs.com"
  },
  {
    traineeEmail1: "trainee1@successive.tech",
    reviewerEmail2: "reviewer1@successive.tech",
    meraEmail3: "tgxcsdu@cdbhs.com"
  }
];
function validateEmail(email) {
  let regex = /^[A-Za-z0-9._%+-]+@successive.tech$/;
  return regex.test(email);
}
/*function validateUsers(user) {
  user.forEach(function (us) {
    validateEmail(us);
  });
}
validateUsers(user); */
/*const user = [

   "trainee1@successive.tech","reviewer1@successive.tech","123456"

];*/
function ValidateUser(user1) {
  //let regex = /^[a-zA-Z0-9_.+-]+@(?:(?:[a-zA-Z0-9-]+\.)?[a-zA-Z]+\.)?(successive)\.tech$/
  //var values = [];
  /*values = Object.values(user);
for(let i=0;i<=2;i++) {
  console.log(values[i]);*/
  /*if((regex.test(values[i])))
{
  console.log(true);
}
else
{
  console.log(false);
}*/
  /*let v=0,inv=0;
let v1 =[];
let in1=[];
user1.forEach(function(user) {
  const {traineeEmail,reviewerEmail} = user;
  console.log(traineeEmail);
  if(validateEmail(traineeEmail)&&validateEmail(reviewerEmail))
  {
    v1.push(user);
    v++;
  }
  else
  {
    in1.push(user);
    inv++;
  }
});
console.log(v);
console.log(v1);*/
  let v1 = [],
    count = 0;
  user.forEach((element1, index) => {
    Object.keys(element1).forEach((element2, index) => {
      //console.log(element1[element2]);
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
      //console.log(V1[i]);
      valid[vc] = v1[i];
      vc++;
      //console.log(true);
    } else {
      //console.log(V1[i]);
      invalid[ic] = v1[i];
      ic++;
      //console.log(false);
    }
  }

  console.log("no of valid users", vc);
  console.log("valid users are as follows", valid);
  console.log("no of invalid users", ic);
  console.log("invalid users are as follows", invalid);
}
ValidateUser(user);
