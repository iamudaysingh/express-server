import { IPermission } from './Interface';
//import { IConfig   } from "../config/IConfig";
const getTrainee : string = "getTrainee";
const head_trainer : string = "head-trainer";
const trainer : string = "trainer";
const trainee : string = "trainee";
const permissions: IPermission = {
  getTrainee: {
    all: [head_trainer],
    read: [trainee, trainee],
    write: [trainer],
    delete: []
  },

};
export { getTrainee , head_trainer, trainer, trainee, permissions };
