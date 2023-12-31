import express from 'express';
import { ENUM_USER_ROLE } from '../../../enums/user';
import auth from '../../middlewares/auth';
import { OrderController } from './order.controller';

const router = express.Router();

router.get('/', auth(ENUM_USER_ROLE.ADMIN), OrderController.getAllOrder);
router.get('/orders', OrderController.getMyAllOrder);
router.get('/:orderId', OrderController.getSingleOrder);
router.post(
  '/create-order',
  auth(ENUM_USER_ROLE.CUSTOMER),
  OrderController.insertIntoDB
);
export const OrderRoutes = router;