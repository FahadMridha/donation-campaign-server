import express from "express";
import { userRoutes } from "../modules/users/user.route";
import { donationRoutes } from "../modules/donations/donation.routes";


const router = express.Router();

const moduleRoutes = [
  {
    path: "/user",
    route: userRoutes,
  },
  {
    path: "/donations",
    route: donationRoutes,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));
export default router;