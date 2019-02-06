import * as mongoose from 'mongoose';
import VersionableSchema from '../versionable/VersionableSchema';
import { userSchema } from './UserModel';
class UserSchema extends VersionableSchema {
  constructor(options: any) {
    const baseSchema = {
      _id: String,
      email: String,
      name: String,
      role : String,
    };
    super(baseSchema, options);
    console.log(baseSchema);
  }
}
export default UserSchema;
