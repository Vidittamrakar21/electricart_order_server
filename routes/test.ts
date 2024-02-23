import express, {Express, Request,Response} from 'express';
//@ts-ignore
import {testserver} from '../controller/test'

const router = express.Router()

router.route('/healthy').get(testserver)


module.exports = router;