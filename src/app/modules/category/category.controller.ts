import { Request, Response } from 'express';
import httpStatus from 'http-status';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import { CategoryService } from './category.service';

const insertIntoDB = catchAsync(async (req: Request, res: Response) => {
  const result = await CategoryService.insertIntoDB(req.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Category created successfully",
    data: result,
  });
});
const getAllBooksFromDB = catchAsync(async (req: Request, res: Response) => {
  const result = await CategoryService.getAllBooksFromDB();

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Categories fetched successfully",
    data: result,
  });
});
const getSingleBooksFromDB = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await CategoryService.getSingleBooksFromDB(id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Category fetched successfully",
    data: result,
  });
});
const updateSingleBooksFromDB = catchAsync(
  async (req: Request, res: Response) => {
    const { id } = req.params;
    const data = req.body;
    const result = await CategoryService.updateSingleBooksFromDB(id, data);

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Category updated successfully",
      data: result,
    });
  }
);
const deleteSingleBooksFromDB = catchAsync(
  async (req: Request, res: Response) => {
    const { id } = req.params;
    const result = await CategoryService.deleteSingleBooksFromDB(id);

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Category deleted successfully",
      data: result,
    });
  }
);

export const CategoryController = {
  insertIntoDB,
  getAllBooksFromDB,
  getSingleBooksFromDB,
  updateSingleBooksFromDB,
  deleteSingleBooksFromDB,
};