const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    Name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    Password: {
        type: String,
        required: true,
    },
    ConfirmPassword: {
        type: String,
        required: false,
    },
    CompanyName: {
        type: String,
        required: true,
    },
    
    PhoneNumber: {
        type: String,
        required: true,
    },
    CompanyUrl: {
        type: String,
        required: false,
    },
});

const UserModel = mongoose.model("User", UserSchema);
module.exports = UserModel;
