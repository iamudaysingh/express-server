import {
  getUsers,
  head_trainer,
  trainer,
  trainer1,
  permissions
} from "../constant";
export default function hasPermission(module_name, role, permissionType) {
  //let {getUsers : { all : [ x ] , read : [ b , c ] , write : [ d ] , delete : [] } } = permissions;
  if (module_name == "getUsers") {
    if (
      permissions[module_name][permissionType].includes(role) ||
      permissions[module_name]["all"].includes(role)
    ) {
      console.log("true");
    } else {
       console.log("false");
    }
    else {
      console.log("false");
    }
  }
}

