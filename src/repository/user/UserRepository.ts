import * as mongoose from 'mongoose';
import VersionableRepository from '../versionable/versionRepository';
import IUserModel from './IUserModel';
import { userModel } from './UserModel';
class UserRepository extends VersionableRepository<IUserModel, mongoose.Model<IUserModel>> {
public model: mongoose.Model<IUserModel>;
constructor() {
super(userModel);
}
public async create(data: any) {
return await this.genericCreate(data);
}
public async update(data: any, dataToUpdate: any) {
return await this.genericUpdate(data, dataToUpdate);
}
public async findOne(Data: any) {
return await this.genericFindOne(Data);
}
public async count() {
return await this.genericCount();
}
public get(data: any) {
  return  this.genericGet(data);
  }
}

export default new UserRepository();
