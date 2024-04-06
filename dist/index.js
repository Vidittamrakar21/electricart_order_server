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
const express_1 = __importDefault(require("express"));
const express4_1 = require("@apollo/server/express4");
const graphql_1 = __importDefault(require("./graphql"));
//@ts-ignore
const test_1 = __importDefault(require("./routes/test"));
const mongoose_1 = __importDefault(require("mongoose"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const morgan_1 = __importDefault(require("morgan"));
const razorpay_1 = __importDefault(require("razorpay"));
dotenv_1.default.config();
function init() {
    return __awaiter(this, void 0, void 0, function* () {
        const app = (0, express_1.default)();
        app.use(express_1.default.json());
        app.use((0, cors_1.default)());
        app.use((0, morgan_1.default)('tiny'));
        main().catch(err => console.log(err));
        function main() {
            return __awaiter(this, void 0, void 0, function* () {
                yield mongoose_1.default.connect(`mongodb+srv://vidit:${process.env.dbpass}@cluster0.90000pt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`);
                console.log("Database Connected");
            });
        }
        app.use("/graphql", (0, express4_1.expressMiddleware)(yield (0, graphql_1.default)()));
        app.use('/api', test_1.default);
        app.get('/', (req, res) => __awaiter(this, void 0, void 0, function* () {
            res.json({ message: "Server Running" });
        }));
        const instance = new razorpay_1.default({
            //@ts-ignore
            key_id: process.env.keyid,
            key_secret: process.env.keysecret,
        });
        const checkout = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const { amt } = req.body;
            let amtt;
            if (amt > 20000) {
                amtt = amt;
            }
            else {
                amtt = amt * 100;
            }
            const options = {
                amount: amtt, // amount in the smallest currency unit
                currency: "INR",
            };
            const order = yield instance.orders.create(options);
            console.log(order);
            const key = process.env.keyid;
            res.status(200).json({ success: true, order, key });
        });
        app.post('/api/payment/checkout', checkout);
        app.get('/', (req, res) => __awaiter(this, void 0, void 0, function* () {
            res.json({ message: "Server Running" });
        }));
        app.listen(8000, () => {
            console.log("server started");
        });
    });
}
init();
