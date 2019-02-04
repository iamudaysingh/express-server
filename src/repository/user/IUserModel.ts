import * as mongoose from 'mongoose';
interface IUserModel extends mongoose.Document {
  email: string;
  name: string;
  role: string;
}
export default IUserModel;
