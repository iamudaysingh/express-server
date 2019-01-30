export interface IPermission {
  [getUsers: string]: {
    read: string[];
    all: string[];
    write: string[];
    delete: string[];
  };
}
