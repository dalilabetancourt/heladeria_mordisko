import express from 'express'
import{home,about, form} from '../controllers/appControllers.js'
const router = express.Router()

router.get ('/',home)

router.get ('/about',about)

router.get ('/form',form)



export default router