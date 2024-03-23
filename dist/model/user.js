"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema;
const UserSchema = new Schema({
    name: { type: String, require: true },
    email: { type: String, require: true },
    cart: { type: [], default: [] },
    orders: { type: [], default: [] },
    recently: { type: [], default: [] },
    address: { type: [], default: [] },
    date: { type: Date, default: Date.now },
});
module.exports = mongoose_1.default.model('users', UserSchema);
