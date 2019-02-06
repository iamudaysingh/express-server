import * as mongoose from 'mongoose';
export default class VersionableSchema extends mongoose.Schema {
constructor(previousSchema: any , options: any ) {
const baseSchema = Object.assign( {
createdAt: {
default: Date.now,
required: true,
type: Date,
},
deleted : {
  default: false,
  required : false,
  type : Boolean,
},
deletedAt: {
required: false,
type: Date,
},
originalId: {
required: true,
type: String,
},
}, previousSchema);
super(baseSchema, options);
}
}
