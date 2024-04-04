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
//@ts-ignore
const user_1 = __importDefault(require("../model/user"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const newuser = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name, email } = payload;
        const exists = yield user_1.default.findOne({ email: email });
        if (exists) {
            //@ts-ignore
            const token = jsonwebtoken_1.default.sign({ name: name, email: email, id: exists._id }, process.env.SECKEY, { expiresIn: "3h" });
            return token;
        }
        else {
            const data = yield user_1.default.create({ name, email });
            if (data) {
                //@ts-ignore
                const token = jsonwebtoken_1.default.sign({ name: name, email: email, id: data._id }, process.env.SECKEY, { expiresIn: "3h" });
                return token;
            }
        }
    }
    catch (error) {
        return (error);
    }
});
const validateuser = (token) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        if (token) {
            //@ts-ignore
            const check = jsonwebtoken_1.default.verify(token, process.env.SECKEY);
            if (check) {
                //@ts-ignore
                const token = jsonwebtoken_1.default.sign({ name: check.name, email: check.email, id: check.id }, process.env.SECKEY, { expiresIn: "36h" });
                const data = { data: check, accesstoken: token };
                return data;
            }
        }
        else {
            console.log("error happend");
        }
    }
    catch (error) {
        return (error);
    }
});
const accessuser = (token) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        if (token) {
            //@ts-ignore
            const check = jsonwebtoken_1.default.verify(token, process.env.SECKEY);
            if (check) {
                //@ts-ignore
                return check;
            }
        }
        else {
            console.log("error happend");
        }
    }
    catch (error) {
        return (error);
    }
});
const updateview = (uid, pid) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield user_1.default.findById(uid);
        if (user) {
            const posts = user.recently;
            if (posts.length > 5) {
                const data = yield user_1.default.updateOne({ _id: uid }, { recently: [] });
            }
            const index = posts.indexOf(pid);
            if (index === -1) {
                const data = yield user_1.default.updateOne({ _id: uid }, { $push: { recently: pid } });
                if (data) {
                    return "updated";
                }
            }
            else {
                return "not updated";
            }
        }
    }
    catch (error) {
        return error;
    }
});
const finduser = (uid) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield user_1.default.findById(uid);
        if (user) {
            return user;
        }
    }
    catch (error) {
        return error;
    }
});
const add_address = (uid, add) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield user_1.default.updateOne({ _id: uid }, { $push: { address: add } });
        if (data) {
            return "updated";
        }
        else {
            return "not updated";
        }
    }
    catch (error) {
        return error;
    }
});
const add_to_cart = (uid, pid) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield user_1.default.findById(uid);
        if (user) {
            const mycart = user.cart;
            const index = mycart.indexOf(pid);
            if (index === -1) {
                const data = yield user_1.default.updateOne({ _id: uid }, { $push: { cart: pid } });
                if (data) {
                    return "updated";
                }
                else {
                    return "not updated";
                }
            }
            else {
                return "not updated";
            }
        }
    }
    catch (error) {
        return error;
    }
});
const clear_to_cart = (uid) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield user_1.default.findById(uid);
        if (user) {
            const data = yield user_1.default.updateOne({ _id: uid }, { cart: [] });
            if (data) {
                return "updated";
            }
            else {
                return "not updated";
            }
        }
    }
    catch (error) {
        return error;
    }
});
const rm_to_cart = (uid, pid) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield user_1.default.updateOne({ _id: uid }, { $pull: { cart: pid } });
        if (data) {
            return "updated";
        }
        else {
            return "not updated";
        }
    }
    catch (error) {
        return error;
    }
});
module.exports = { newuser, validateuser, accessuser, updateview, finduser, add_address, add_to_cart, rm_to_cart, clear_to_cart };
