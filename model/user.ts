import mongoose from "mongoose";

const Schema = mongoose.Schema;

const UserSchema = new Schema ({
    name: {type: String, require: true},
    email: {type: String, require: true},
    cart: {type : [], default: []},
    orders: {type : [], default: []},
    recently: {type : [], default: []},
    address: {type : [], default: []},
    date: {type : Date, default: Date.now},

})

module.exports = mongoose.model('users', UserSchema);
