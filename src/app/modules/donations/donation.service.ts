import { IDonation } from "./donation.interface";
import Donation from "./donation.model";


const createDonation = async (donation: IDonation) => {
  try {
    const result = await Donation.create(donation);
    return result;
  } catch (error) {
    console.log(error);
  }
};

const getAllDonations = async () => {
  try {
    const result = await Donation.find({});
    return result;
  } catch (error) {
    console.log(error);
  }
};

const getSingleDonation = async (id: string) => {
  try {
    const result = await Donation.findById(id);
    return result;
  } catch (error) {
    console.log(error);
  }
};

const updateDonation = async (id: string, donationData: Partial<IDonation>) => {
  try {
    const result = await Donation.findOneAndUpdate({ _id: id }, donationData);
    return result;
  } catch (error) {
    console.log(error);
  }
};

const deleteDonation = async (id: string) => {
  try {
    const result = await Donation.findByIdAndDelete(id);
    return result;
  } catch (error) {
    console.log(error);
  }
};

export const donationService = {
  createDonation,
  getAllDonations,
  getSingleDonation,
  updateDonation,
  deleteDonation,
};