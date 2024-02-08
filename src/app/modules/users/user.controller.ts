import { NextFunction, Request, Response } from "express";
import { userService } from "./user.service";

const createUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { ...userData } = req.body;
    const { user, accessToken } = await userService.createUser(userData);
    res.send({
      status: "success",
      message: "User registered successfully",
      data: { email: user.email, accessToken },
    });
  } catch (error) {
    next(error);
  }
};

const loginUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { ...userData } = req.body;
    const { user, accessToken } = await userService.loginUser(userData);
    res.send({
      status: "success",
      message: "User logged in successfully",
      data: { email: user.email, accessToken, wishlist: user.wishlist },
    });
  } catch (error) {
    next(error);
  }
};

const getUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { email } = req.params;
    const result = await userService.getUser(email);
    res.send({
      status: "success",
      message: "User retrieved successfully",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};
const getAllUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await userService.getAllUser();
    res.send({
      status: "success",
      message: "User retrieved successfully",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

export const userController = {
  createUser,
  loginUser,
  getUser,
  getAllUser
};