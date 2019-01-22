export interface Iper {
  [getUsers: string]: {
    read: string[];
    all: string[];
    write: string[];
    delete: string[];
  };
}
export interface Iper1 {
  traineeEmail: string;
  reviewerEmail: string;
  meraEmail: string;
}
