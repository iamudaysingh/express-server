import  * as mongoose   from "mongoose";
interface IUserModel extends mongoose.Document {
id: string,
name : string
}
export default IUserModel;
