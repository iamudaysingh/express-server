import  * as mongoose   from "mongoose";
interface IUserModel extends mongoose.Document {

name : string,
email : string,
role: string

}
export default IUserModel;
