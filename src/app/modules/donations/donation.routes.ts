import express from "express";
import { donationController } from "./donation.controller";


const router = express.Router();

router.post("/", donationController.createDonation);
router.get("/:id", donationController.getSingleDonation);
router.patch("/:id", donationController.updateDonation);
router.delete("/:id", donationController.deleteDonation);
router.get("/", donationController.getAllDonations);

export const donationRoutes = router;