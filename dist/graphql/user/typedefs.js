"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.typeDefs = void 0;
exports.typeDefs = `
  
    type Token {
        name: String
        email: String
        id: String
        iat: Int
        exp: Int

    }

    type userinfo {
        data: Token
        accesstoken: String
    }
  
    type User {
    name: String,
    email: String,
    cart: [String],
    orders: [String],
    recently: [String],
    address: [String],
    }
 `;
