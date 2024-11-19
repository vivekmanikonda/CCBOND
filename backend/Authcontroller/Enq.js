// Controller: Enquiry Controller (Authcontroller/Enq.js)
const EnquiryModel = require('../models/Enquiry');

// Create enquiry
exports.createEnquiry = async (req, res) => {
    const { Productname, Casno, Quantity, Purity, Description, Quote, Document, Location, Structure } = req.body;

    if (!Productname || !Location || !Casno) {
        return res.status(400).json({ message: "Please fill all required fields." });
    }

    try {
        const newEnquiry = new EnquiryModel({
            Productname,
            Casno,
            Quantity,
            Purity,
            Description,
            Quote,
            Document,
            Location,
            Structure
        });

        const savedEnquiry = await newEnquiry.save();
        res.status(201).json({ message: "Enquiry created successfully!", enquiry: savedEnquiry });
    } catch (err) {
        console.error("Error creating enquiry:", err);
        res.status(500).json({ message: "Error creating enquiry.", error: err });
    }
};

// Get enquiries
exports.getEnquiries = async (req, res) => {
    try {
        const enquiries = await EnquiryModel.find({}, '-Structure -Document'); // Exclude binary fields
        res.json(enquiries);
    } catch (err) {
        console.error("Error fetching enquiries:", err);
        res.status(500).json({ message: "Error fetching enquiries." });
    }
};
