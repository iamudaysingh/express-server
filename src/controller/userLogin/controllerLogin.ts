import * as bcrypt from 'bcrypt';
import { NextFunction, Request, Response } from 'express';
import * as jwt from 'jsonwebtoken';
import successHandler from '../../libs/routes/successHandler';
import UserRepository from '../../repository/user/UserRepository';

class Controller {
public static getInstance() {
if (!Controller.instance) {
Controller.instance = new Controller();
}
return Controller.instance;
}
private static instance: Controller;
public async create(req: Request, res: Response, next: NextFunction) {
console.log('inside controller login');
try {
const { Email, password } = req.body;
const user1 = await UserRepository.findOne({ email: Email });
console.log('user1:-', user1);
if (user1.email) {
const resp = await bcrypt.compare(password, user1.password);
console.log('123', resp );
if (resp) {
const token =   jwt.sign({
user1,
}, process.env.key, { expiresIn: '1h' });
console.log('before sending response');
res.status(200).send(successHandler('Good Request' , 'Successful login', token));
console.log('after sending response');
}
else {
res.status(400).send(successHandler('Bad Request' , 'Unsuccessful login', 'unauthorized'));
}
}
}
catch (err) {
console.log('error is', err);
}
}
}
export default Controller.getInstance();
