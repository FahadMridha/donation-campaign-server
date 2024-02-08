import mongoose, { Schema } from "mongoose";
import { IDonation} from "./donation.interface";


const donationSchema = new Schema<IDonation>({
  name: {
    type: String,
    required: true,
  },
  brand: {
    type: String,
    required: true,
  },
  userEmail: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  operatingSystem: {
    type: String,
    required: true,
  },
  connectivity: {
    type: String,
    required: true,
  },
  powerSource: {
    type: String,
    required: true,
  },
  releaseDate: {
    type: String,
    required: true,
  },
  features: {
    type: String,
    required: true,
  },
  modelNumber: {
    type: String,
    required: true,
  },
  weight: {
    type: Number,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  }
});

const Donation = mongoose.model<IDonation>("Donation", donationSchema);

export default Donation;