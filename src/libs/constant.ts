import { IPermission } from "./Interface";
const getTrainee : string = "trainee";
const head_trainer: string = "head-trainer";
const trainer: string = "trainer";
const trainee: string = "trainee";
const permissions: IPermission = {
  trainee: {
    all: [head_trainer],
    read: [trainee, trainee],
    write: [trainer],
    delete: []
  }
};
export { permissions };
