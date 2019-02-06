import * as mongoose from 'mongoose';
export default interface IVersionableModel extends mongoose.Document {
originalId: string;
deleteAt: Date;
createdAt: Date;
deleted: boolean;
}
