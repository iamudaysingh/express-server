import * as mongoose from 'mongoose';
import IUserModel from '../user/IUserModel';
import { userModel } from '../user/UserModel';
export default class VersionableRepository <D extends mongoose.Document, M extends mongoose.Model<D>> {

public static generateObjectId() {
return String(mongoose.Types.ObjectId());
}

public modelType: M;
constructor(model) {
this.modelType = model;
}
/*
@ Generic Update Using async and await
*/
// public async genericCreate(data: any): Promise<D> {
// const newId = VersionableRepository.generateObjectId();
// return await this.modelType.create({
// ...data,
// _id: newId,
// originalId: newId,
// });
// }
public async genericCreate(data: any): Promise<D> {
  const newId = VersionableRepository.generateObjectId();
  return await this.modelType.create({...data,
  _id: newId,
  originalId: newId,
  } );
  }
public async genericVersionUpdate(data: any , res: any) {
  console.log('inside generic version', data);
  const newId = VersionableRepository.generateObjectId();
  delete res._id;
  const newObj = Object.assign(res ,  data);
  console.log('inside generic version 2', newObj);
  return await this.modelType.create(
    {
    ...newObj ,
    originalId :  data.id,
    // tslint:disable-next-line:object-literal-sort-keys
    _id: newId,
  } );
}
public genericUpdate(data: any, dataToUpdate: any) {

// return this.modelType.updateOne(data, dataUpdated);
return this.modelType.updateOne(data, dataToUpdate, (err) => {
  if (err) {
    console.log('Failure in update', err);
  } else {
    console.log('Success in update');
  }
});
}
public async genericCreateUpdate(data: any) {
console.log('qwertyuio', data);
const res = await this.modelType.findOne({ originalId : data.id});
  // console.log('id found 1234567890', res.id );
  // console.log('hi123' , res.id);
const newId = res._id;
this.genericVersionUpdate(data , res);
return await this.modelType.updateOne({ originalId : newId , deletedAt: { $exists: false}},
    { deletedAt : Date.now(), deleted: true }).then(
    (err) => console.log(err),
    );
}
public genericCount(): mongoose.Query < number > {
console.log('hi');
return this.modelType.countDocuments({});
}
public genericFindOne(Data): mongoose.DocumentQuery<D, D, {}> {
return this.modelType.findOne(Data);
}
public genericDelete(data: any ) {
console.log('I am inside delete' , data);
this.modelType.updateOne( { _id : data , deletedAt : { $exists : false } } , {deletedAt : Date.now() } ).then(
(err) => console.log(err));
}
public async genericGet(data: any ) {
  console.log('I am inside get' , data);
  const { skip , limit } = data;
  console.log('skip', skip);
  const allData = await  this.modelType.find( undefined, {skip , limit});
  console.log('asasas', allData);
  return allData;
  }
}
