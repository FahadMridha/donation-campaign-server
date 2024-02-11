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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.donationController = void 0;
const donation_service_1 = require("./donation.service");
const createDonation = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const donation = req.body;
        const result = yield donation_service_1.donationService.createDonation(donation);
        res.send({
            status: "success",
            message: "Donation created successfully",
            data: result,
        });
    }
    catch (error) {
        console.log(error);
    }
});
const getAllDonations = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield donation_service_1.donationService.getAllDonations();
        res.send({
            status: "success",
            message: "All donations retrieved successfully",
            data: result,
        });
    }
    catch (error) {
        console.log(error);
    }
});
const getSingleDonation = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const donationId = req.params.id;
        const result = yield donation_service_1.donationService.getSingleDonation(donationId);
        res.send({
            status: "success",
            message: "Donation retrieved successfully",
            data: result,
        });
    }
    catch (error) {
        console.log(error);
    }
});
const updateDonation = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const donationId = req.params.id;
        const donationData = __rest(req.body, []);
        const result = yield donation_service_1.donationService.updateDonation(donationId, donationData);
        res.send({
            status: "success",
            message: "Donation updated successfully",
            data: result,
        });
    }
    catch (error) {
        console.log(error);
    }
});
const deleteDonation = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const donationId = req.params.id;
        const result = yield donation_service_1.donationService.deleteDonation(donationId);
        res.send({
            status: "success",
            message: "Donation deleted successfully",
            data: result,
        });
    }
    catch (error) {
        console.log(error);
    }
});
exports.donationController = {
    createDonation,
    getAllDonations,
    getSingleDonation,
    updateDonation,
    deleteDonation,
};
