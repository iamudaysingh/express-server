import * as mongoose from 'mongoose';
import IVersionableModel from '../versionable/IVersionableModel';
interface IUserModel extends IVersionableModel {
  email: string;
  name: string;
  role: string;
  password: string;
}
export default IUserModel;
