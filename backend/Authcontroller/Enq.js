const EnquiryModel = require('../models/Enquiry');
const Express = require('express');

exports.createEnquiry = async (req, res) => {
    //req data
    const {
        Productname, Casno, Quantity, Purity, Description, Quote, Document, Location, Structure } = req.body;
    //checking the data wheather it is there or not 
    console.log(req.body)
    if (!Productname || !Location || !Casno) {
        return res.status(400).json({ message: "Please fill all required fields.'" })
    }
    
    // if there it will create enquiry
    try {
        const formData = new EnquiryModel({
            Productname, Casno, Quantity, Purity, Description, Quote, Document, Location, Structure
        });
        const savedEnquiry = formData.save();
        return res.status(400).json({ message: "FORM CREATED SUCCESSFULLY", savedEnquiry })
        
    }
    catch (err) {
        res.status(500).json({ message: "ERROR OCCURED", err })

    }
}

exports.getEnquiry = async (req, res) => {
    try {
        const enquiries = await EnquiryModel.find();
        return res.status(201).json(enquiries);
    }
    catch (error) {
        res.status(500).json({ message: "Some error in getenquiries", error })

    }
}

