import * as express from 'express';
import traineeRouter from './controller/trainee/routes';
const router = express.Router();
router.use('/trainee', traineeRouter );
router.use('/user', (req,res)=>{
res.send("I AM USER")
})
export default router;
