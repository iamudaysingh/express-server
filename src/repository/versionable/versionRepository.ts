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
public genericCreate(data: any): Promise<D> {
  const newId = VersionableRepository.generateObjectId();
  return this.modelType.create({...data,
  _id: newId,
  originalId: newId,
  } );
  }
public genericVersionUpdate(data: any , res: any) {
  console.log('inside generic version', data);
  const newId = VersionableRepository.generateObjectId();
  const newId1 = res._id;
  delete res._id;
  this.modelType.updateOne({ originalId : newId1, deletedAt: { $exists: false}},
    { deletedAt : Date.now(), deleted: true }).then(
    (err) => console.log(err),
    );
  return this.modelType.create(
    {
    ...data.dataToUpdate ,
    originalId :  data.id,
    // tslint:disable-next-line:object-literal-sort-keys
    _id: newId,
  } );
}
public genericUpdate(data: any, dataToUpdate: any) {

// return this.modelType.updateOne(data, dataUpdated);
return this.modelType.updateMany(data, dataToUpdate, (err) => {
  if (err) {
    console.log('Failure in update', err);
  } else {
    console.log('Success in update');
  }
});
}
public genericCreateUpdate(data: any) {
console.log('qwertyuio', data);
this.modelType.findOne({ originalId : data.id})
  .then((res) => {
  // console.log('id found 1234567890', res.id );
  // console.log('hi123' , res.id);
  this.genericVersionUpdate(data , res._id);
})
  .catch((err) => {
      console.log('Invalid', err);
  });

}
public genericCount(): mongoose.Query < number > {
return this.modelType.countDocuments({});
}
public genericFindOne(Data): mongoose.DocumentQuery<D, D, {}> {
return this.modelType.findOne(Data);
}
public genericDelete(data: any ) {
console.log('I am inside delete' , data);
// return this.modelType.findOneAndDelete({
// ...data,
// function(err) {
// if (err) {
// throw err;
// }
// console.log('1 document deleted');
// },
// });
this.modelType.updateOne( { _id : data , deletedAt : { $exists : false } } , {deletedAt : Date.now() } ).then(
(err) => console.log(err));
}
}
