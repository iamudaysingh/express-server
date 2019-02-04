import { permissions } from '../constant';
export default function hasPermission(
  moduleName: string,
  role: string,
  permissionType: string,
): boolean {
  if (permissions.hasOwnProperty(moduleName)) {
    if (permissions[moduleName].all.includes(role)) {
      return true;
    } else if (permissions[moduleName][permissionType].includes(role)) {
      return true;
    } else {
      return false;
    }
  } else {
    return false;
  }
}
