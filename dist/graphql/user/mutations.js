"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mutations = void 0;
exports.mutations = `
    createuser(name: String, email: String): String

    checkuser(token: String): userinfo

    giveaccess(token: String): Token

    recentpost(uid: String, pid: String): String

    findoneuser(uid: String): User

    putadd(uid: String, add: String): String

    addcart(uid: String, pid: String): String

    rmcart(uid: String, pid: String): String

    clearcart(uid: String): String



`;
