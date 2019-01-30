export interface IPermission {
  trainee : {
    read: string[];
    all: string[];
    write: string[];
    delete: string[];
  };
}
