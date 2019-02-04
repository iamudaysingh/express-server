import { IPermission } from './Interface';
const getTrainee: string = 'trainee';
const headTrainer: string = 'head-trainer';
const trainer: string = 'trainer';
const trainee: string = 'trainee';
const permissions: IPermission = {
  trainee: {
    all: [headTrainer],
    delete : [],
    read: [trainee, trainee],
    write: [trainer],
 },
};
export { permissions };
