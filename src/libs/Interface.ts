export interface IPermission {
  trainee: {
    read: string[];
    all: string[];
    write: string[];
    delete: string[];
  };
}
export interface IUserRead extends Request {
  users: any;
}
