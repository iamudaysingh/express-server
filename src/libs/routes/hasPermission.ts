import {
  getTrainee,
  head_trainer,
  trainer,
  trainee,
  permissions
} from "../constant";
export default function hasPermission(
  module_name: string,
  role: string,
  permissionType: string
): boolean {
  if (permissions.hasOwnProperty(module_name)) {
    if (permissions[module_name]["all"].includes(role)) {
      return true;
    } else if (permissions[module_name][permissionType].includes(role)) {
      return true;
    } else {
      return false;
    }
  } else {
    return false;
  }
}
