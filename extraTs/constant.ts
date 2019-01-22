import { Iper } from "./utils/interfaces";
const getUsers : string = "getUsers";
const getEmpid : string = "getEmpid";
const  getAccountinfo : string = " getAccountinfo";
const getBranchinfo : string = "getBranchinfo";
const getStudentinfo : string = "getStudentinfo";
const head_trainer : string = "head-trainer";
const trainer : string = "trainer";
const trainee : string = "trainee";
const permissions: Iper = {
  getUsers: {
    all: [head_trainer],
    read: [trainee, trainee],
    write: [trainer],
    delete: []
  },
  getEmpid: {
    all: [head_trainer],
    read: [trainee, trainer],
    write: [trainer],
    delete: []
  },
  getAccountinfo: {
    all: [head_trainer],
    read: [trainee],
    write: [trainer, trainer],
    delete: []
  },
    getBranchinfo: {
      all: [head_trainer],
      read: [trainee],
      write: [trainer, trainer],
      delete: []
    },
    getStudentinfo: {
      all: [head_trainer],
      read: [trainee,trainer],
      write: [trainer, trainer],
      delete: []
  }
};
export { getUsers, head_trainer, trainer, trainee, permissions };
