import { userSchema } from "./UserModel";
import * as mongoose from "mongoose";
class UserSchema extends mongoose.Schema {
  constructor(options: any) {
    const baseSchema = {
      _id: String,
      name: String
    };
    super(baseSchema, options);
    console.log(baseSchema);
  }
}
export default UserSchema;
