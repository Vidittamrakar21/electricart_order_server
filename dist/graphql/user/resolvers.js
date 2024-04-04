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
const user_1 = require("../../controller/user");
const queries = {
    hello: () => {
        return 'Hello';
    }
};
const mutations = {
    createuser: (_, payload) => __awaiter(void 0, void 0, void 0, function* () {
        const data = yield (0, user_1.newuser)(payload);
        return data;
    }),
    checkuser: (_, payload) => __awaiter(void 0, void 0, void 0, function* () {
        //@ts-ignore
        const tok = payload.token;
        const data = yield (0, user_1.validateuser)(tok);
        return data;
    }),
    giveaccess: (_, payload) => __awaiter(void 0, void 0, void 0, function* () {
        //@ts-ignore
        const tok = payload.token;
        const data = yield (0, user_1.accessuser)(tok);
        return data;
    }),
    recentpost: (_, payload) => __awaiter(void 0, void 0, void 0, function* () {
        console.log(payload);
        //@ts-ignore
        const uid = payload.uid;
        //@ts-ignore
        const pid = payload.pid;
        const data = yield (0, user_1.updateview)(uid, pid);
        return data;
    }),
    findoneuser: (_, payload) => __awaiter(void 0, void 0, void 0, function* () {
        //@ts-ignore
        const uid = payload.uid;
        const data = yield (0, user_1.finduser)(uid);
        return data;
    }),
    putadd: (_, payload) => __awaiter(void 0, void 0, void 0, function* () {
        //@ts-ignore
        const uid = payload.uid;
        //@ts-ignore
        const add = payload.add;
        const data = yield (0, user_1.add_address)(uid, add);
        return data;
    }),
    addcart: (_, payload) => __awaiter(void 0, void 0, void 0, function* () {
        //@ts-ignore
        const uid = payload.uid;
        //@ts-ignore
        const pid = payload.pid;
        const data = yield (0, user_1.add_to_cart)(uid, pid);
        return data;
    }),
    rmcart: (_, payload) => __awaiter(void 0, void 0, void 0, function* () {
        //@ts-ignore
        const uid = payload.uid;
        //@ts-ignore
        const pid = payload.pid;
        const data = yield (0, user_1.rm_to_cart)(uid, pid);
        return data;
    }),
    clearcart: (_, payload) => __awaiter(void 0, void 0, void 0, function* () {
        //@ts-ignore
        const uid = payload.uid;
        const data = yield (0, user_1.clear_to_cart)(uid);
        return data;
    })
};
exports.resolvers = { queries, mutations };
