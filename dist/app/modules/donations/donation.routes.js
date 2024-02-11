"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.donationRoutes = void 0;
const express_1 = __importDefault(require("express"));
const donation_controller_1 = require("./donation.controller");
const router = express_1.default.Router();
router.post("/", donation_controller_1.donationController.createDonation);
router.get("/:id", donation_controller_1.donationController.getSingleDonation);
router.patch("/:id", donation_controller_1.donationController.updateDonation);
router.delete("/:id", donation_controller_1.donationController.deleteDonation);
router.get("/", donation_controller_1.donationController.getAllDonations);
exports.donationRoutes = router;
