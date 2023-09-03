import { Request, Response } from 'express';
import httpStatus from 'http-status';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import { UserService } from './user.service';

const getAllUserFromDB = catchAsync(async (req: Request, res: Response) => {
  const result = await UserService.getAllUserFromDB();

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Users retrieved successfully',
    data: result,
  });
});
const getSingleUserFromDB = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await UserService.getSingleUserFromDB(id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'User getched successfully',
    data: result,
  });
});
const updateSingleUserFromDB = catchAsync(
  async (req: Request, res: Response) => {
    const { id } = req.params;
    const data = req.body;
    const result = await UserService.updateSingleUserFromDB(id, data);

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "User updated successfully",
      data: result,
    });
  }
);
const deleteSingleUserFromDB = catchAsync(
  async (req: Request, res: Response) => {
    const { id } = req.params;
    const result = await UserService.deleteSingleUserFromDB(id);

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "User deleted successfully",
      data: result,
    });
  }
);

export const UserController = {
  getSingleUserFromDB,
  updateSingleUserFromDB,
  getAllUserFromDB,
  deleteSingleUserFromDB,
};