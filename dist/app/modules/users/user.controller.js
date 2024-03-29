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
exports.userController = void 0;
const user_service_1 = require("./user.service");
const createUser = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userData = __rest(req.body, []);
        const { user, accessToken } = yield user_service_1.userService.createUser(userData);
        res.send({
            status: "success",
            message: "User registered successfully",
            data: { email: user.email, accessToken },
        });
    }
    catch (error) {
        next(error);
    }
});
const loginUser = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userData = __rest(req.body, []);
        const { user, accessToken } = yield user_service_1.userService.loginUser(userData);
        res.send({
            status: "success",
            message: "User logged in successfully",
            data: { email: user.email, role: user.role, accessToken, },
        });
    }
    catch (error) {
        next(error);
    }
});
const getUser = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email } = req.params;
        const result = yield user_service_1.userService.getUser(email);
        res.send({
            status: "success",
            message: "User retrieved successfully",
            data: result,
        });
    }
    catch (error) {
        next(error);
    }
});
const getAllUser = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield user_service_1.userService.getAllUser();
        res.send({
            status: "success",
            message: "User retrieved successfully",
            data: result,
        });
    }
    catch (error) {
        next(error);
    }
});
exports.userController = {
    createUser,
    loginUser,
    getUser,
    getAllUser
};
