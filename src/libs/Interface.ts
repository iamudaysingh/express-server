export interface IPermission {
  trainee: {
    read: string[];
    all: string[];
    write: string[];
    delete: string[];
  };
}
export default interface IUserRead extends Request {
  users: any;
  skipLimit: [];
}
