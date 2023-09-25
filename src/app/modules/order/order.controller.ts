import { Request, Response } from 'express';
import httpStatus from 'http-status';
import { JwtPayload, Secret } from 'jsonwebtoken';
import config from '../../../config';
import { jwtHelpers } from '../../../helpers/jwtHelpers';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import { OrderService } from './order.service';

const insertIntoDB = catchAsync(async (req: Request, res: Response) => {
  const user = req.user as JwtPayload;
  const result = await OrderService.insertIntoDB(user, req.body);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Order created successfully',
    data: result,
  });
});

const getAllOrder = catchAsync(async (req: Request, res: Response) => {
  const result = await OrderService.getAllOrder();

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Orders retrieved successfully",
    data: result,
  });
});

const getSingleOrder = catchAsync(async (req: Request, res: Response) => {
  const { orderId } = req.params;
  const token = req.headers.authorization;
  const { userId, role } = jwtHelpers.verifyToken(
    token as string,
    config.jwt.secret as Secret
  );
  const result = await OrderService.getSingleOrder(orderId, userId, role);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Order fetched successfully",
    data: result,
  });
});
const getMyAllOrder = catchAsync(async (req: Request, res: Response) => {
  const token = req.headers.authorization;
  const { userId } = jwtHelpers.verifyToken(
    token as string,
    config.jwt.secret as Secret
  );

  const result = await OrderService.getMyAllOrder(userId);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Orders retrieved successfully",
    data: result,
  });
});

export const OrderController = {
  insertIntoDB,
  getAllOrder,
  getMyAllOrder,
  getSingleOrder,
};