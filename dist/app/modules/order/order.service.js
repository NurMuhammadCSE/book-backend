"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderService = void 0;
const prisma_1 = __importDefault(require("../../../shared/prisma"));
const insertIntoDB = (user, OrderData) => __awaiter(void 0, void 0, void 0, function* () {
    const orderData = {
        userId: user.userId,
        orderedBooks: OrderData.orderedBooks,
    };
    const result = yield prisma_1.default.order.create({
        data: orderData,
    });
    return result;
});
const getAllOrder = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.default.order.findMany({});
    return result;
});
const getSingleOrder = (id, userId, role) => __awaiter(void 0, void 0, void 0, function* () {
    if (role === 'admin') {
        const result = yield prisma_1.default.order.findUnique({
            where: {
                id,
            },
        });
        return result;
    }
    else {
        const result = yield prisma_1.default.order.findUnique({
            where: {
                id,
                userId,
            },
        });
        return result;
    }
});
const getMyAllOrder = (userId) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.default.order.findMany({
        where: {
            userId,
        },
    });
    return result;
});
exports.OrderService = {
    insertIntoDB,
    getAllOrder,
    getSingleOrder,
    getMyAllOrder,
};
