import { Iper } from "./utils/interfaces";
const getUsers = "getUsers";
const getEmpid = "getEmpid";
const  getAccountinfo = " getAccountinfo";
const getBranchinfo = "getBranchinfo";
const getStudentinfo = "getStudentinfo";
const head_trainer = "head-trainer";
const trainer = "trainer";
const trainee= "trainee";
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
