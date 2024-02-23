"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
//@ts-ignore
const test_1 = require("../controller/test");
const router = express_1.default.Router();
router.route('/healthy').get(test_1.testserver);
module.exports = router;
