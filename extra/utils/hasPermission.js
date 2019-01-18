const getUsers = "getUsers";
const head_trainer = "head_trainer";
const trainer = "trainer";
const trainer1 = "trainee";
let permissions = {
  getUsers: {
    all: ["head-trainer"],
    read: ["trainee", "trainer"],
    write: ["trainer"],
    delete: []
  }
};
function hasPermission(module_name, role, permissionType) {
  //let {getUsers : { all : [ x ] , read : [ b , c ] , write : [ d ] , delete : [] } } = permissions;
  if (module_name == "getUsers") {
    if (permissions[module_name][permissionType].includes(role)|| permissionType== "all") {
      console.log("true");
    } else console.log("false");
  }
}
hasPermission("getUsers", "trainer", "write");
