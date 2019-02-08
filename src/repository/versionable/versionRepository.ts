import * as mongoose from 'mongoose';
import IUserModel from '../user/IUserModel';
import { userModel } from '../user/UserModel';
export default class VersionableRepository<
  D extends mongoose.Document,
  M extends mongoose.Model<D>
> {
  public static generateObjectId() {
    return String(mongoose.Types.ObjectId());
  }

  public modelType: M;
  constructor(model) {
    this.modelType = model;
  }
  public async genericCreate(data: any): Promise<D> {
    try {
    const newId = VersionableRepository.generateObjectId();
    return await this.modelType.create({
      ...data,
      _id: newId,
      originalId: newId,
    });
  }
  catch (err) {
    console.log(err);
    throw err;
  }
  }
  public async genericVersionUpdate(data: any, res: any) {
    try {
    const newId = await VersionableRepository.generateObjectId();
    const newObj = await Object.assign(res, data.dataToUpdate);
    return await this.modelType.create({
      _id: newId,
      ...newObj,
      originalId: newId,
    });
    }
    catch (err) {
      console.log(err);
      throw err;
    }
  }
  public genericUpdate(data: any, dataToUpdate: any) {
    try {
    return this.modelType.updateOne(data, dataToUpdate, (err) => {
      if (err) {
        console.log('Failure in update', err);
      } else {
        console.log('Success in update');
      }
    });
  }
  catch (err) {
    console.log(err);
    throw err;
  }
  }
  public async genericCreateUpdate(data: any) {
    try {
    const res = await this.modelType.findOne({ originalId: data.id });
    const newId = res._id;
    const value = await this.genericVersionUpdate(data, res);
    return await this.modelType
      .updateOne(
        { originalId: newId, deletedAt: { $exists: false } },
        { deletedAt: Date.now(), deleted: true },
      );
      }
      catch (err) {
        console.log(err);
        throw err;
      }
  }
  public genericCount(): mongoose.Query<number> {
    return this.modelType.countDocuments({});
  }
  public genericFindOne(Data): mongoose.DocumentQuery<D, D, {}> {
    return this.modelType.findOne(Data);
  }
  public async genericDelete(data: any) {
    try {
    await this.modelType
      .updateOne(
        {
          _id: data,
          deletedAt: { $exists: false },
        },
        { deletedAt: Date.now(), deleted: true },
      );
    }
    catch (err) {
      console.log(err);
      throw err;
    }
  }
  public async genericGet(data: any) {
    try {
    const { skip, limit, role } = data;
    const newSkip = Number(skip);
    const newLimit = Number(limit);
    const allData1 = await this.modelType.find({ role }, undefined, {
      limit: newLimit,
      skip: newSkip,
    });
    return allData1;
  }
  catch (err) {
    console.log(err);
    throw err;
  }
}
}
