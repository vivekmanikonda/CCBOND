const mongoose = require("mongoose");

const EnquirySchema = new mongoose.Schema({
    Productname: {
        type: String,
        required: true
    },
    Casno: {
        type: String,
        required: true
    },

    Quantity: {
        type: String,
        required: false
    },

    Purity: {
        type: String,
        require: false
    },
    Description: {
        type: String,
        required: false,
    },
    Quote: {
        type: String,
        required: false,

    },
    Structure: {
        type: Buffer,

    },
    Document: {
        type: Buffer,
    },
    Location: {
        country: {
            type: String,
            required: true,
        },
        state: {
            type: String,
            required: true,
        },
        city: {
            type: String,
            required: true,
        },
        CreatedAt: {
            type: Date,
            default: Date.now
        }
    },


})
const EnquiryModel = mongoose.model("Enquiry", EnquirySchema);
module.exports = EnquiryModel;

