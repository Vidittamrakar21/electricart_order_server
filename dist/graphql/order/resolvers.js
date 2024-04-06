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
Object.defineProperty(exports, "__esModule", { value: true });
exports.resolvers = void 0;
//@ts-ignore
const order_1 = require("../../controller/order");
const queries = {};
const mutations = {
    createorder: (_, payload) => __awaiter(void 0, void 0, void 0, function* () {
        const data = yield (0, order_1.neworder)(payload);
        return data._id;
    }),
    orderfind: (_, payload) => __awaiter(void 0, void 0, void 0, function* () {
        //@ts-ignore
        const uid = payload.uid;
        const data = yield (0, order_1.findorder)(uid);
        return data;
    })
};
exports.resolvers = { queries, mutations };
