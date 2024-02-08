import { NextFunction, Request, Response } from "express";
import { donationService } from "./donation.service";


const createDonation = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const donation = req.body;
    const result = await donationService.createDonation(donation);
    res.send({
      status: "success",
      message: "Donation created successfully",
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};

const getAllDonations = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await donationService.getAllDonations();
    res.send({
      status: "success",
      message: "All donations retrieved successfully",
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};

const getSingleDonation = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const donationId = req.params.id;
    const result = await donationService.getSingleDonation(donationId);
    res.send({
      status: "success",
      message: "Donation retrieved successfully",
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};

const updateDonation = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const donationId = req.params.id;
    const { ...donationData } = req.body;
    const result = await donationService.updateDonation(donationId, donationData);
    res.send({
      status: "success",
      message: "Donation updated successfully",
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};
const deleteDonation = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const donationId = req.params.id;
    const result = await donationService.deleteDonation(donationId);
    res.send({
      status: "success",
      message: "Donation deleted successfully",
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};

export const donationController = {
  createDonation,
  getAllDonations,
  getSingleDonation,
  updateDonation,
  deleteDonation,
};