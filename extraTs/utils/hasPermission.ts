import {
  getUsers,
  head_trainer,
  trainer,
  trainee,
  permissions
} from "../constant";
export default function hasPermission(
  module_name: string,
  role: string,
  permissionType: string
): void {
  if (permissions.hasOwnProperty(module_name)) {
    if (permissions[module_name]["all"].includes(role)) {
      console.log(true);
    } else if (permissions[module_name][permissionType].includes(role)) {
      console.log(true);
    } else {
      console.log(false);
    }
  } else {
    console.log(false);
  }
}
