import {Router} from 'express'

import {OrderController} from '../controllers/OrderController'
const router = Router()
const orderController = new OrderController()

router.post('/order',orderController.create);
router.get('/orders',orderController.getAll);

export default router;