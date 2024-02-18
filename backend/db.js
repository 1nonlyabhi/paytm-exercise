const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://zugheadzones:HvWOFdTM29YTBXNI@cluster0.yxj0pmh.mongodb.net/")

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        require: true,
        unique: true,
        true: true,
        lowercase: true,
        minLength: true,
        maxLength: true
    },
    firstName: {
        type: String,
        trim: true,
        maxLength: 50
    },
    lastName: {
        type: String,
        trim: true,
        maxLength: 50
    },
    password: {
        type: String,
        require: true,
        minLength: 6
    }
});

const User = mongoose.model('User', userSchema);

module.exports = {
    User
};
