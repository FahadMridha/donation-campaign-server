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
exports.donationService = void 0;
const donation_model_1 = __importDefault(require("./donation.model"));
const createDonation = (donation) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield donation_model_1.default.create(donation);
        return result;
    }
    catch (error) {
        console.log(error);
    }
});
const getAllDonations = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield donation_model_1.default.find({});
        return result;
    }
    catch (error) {
        console.log(error);
    }
});
const getSingleDonation = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield donation_model_1.default.findById(id);
        return result;
    }
    catch (error) {
        console.log(error);
    }
});
const updateDonation = (id, donationData) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield donation_model_1.default.findOneAndUpdate({ _id: id }, donationData);
        return result;
    }
    catch (error) {
        console.log(error);
    }
});
const deleteDonation = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield donation_model_1.default.findByIdAndDelete(id);
        return result;
    }
    catch (error) {
        console.log(error);
    }
});
exports.donationService = {
    createDonation,
    getAllDonations,
    getSingleDonation,
    updateDonation,
    deleteDonation,
};
