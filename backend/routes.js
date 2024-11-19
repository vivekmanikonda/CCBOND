// Router: Authcontroller/Routes.js
const express = require('express');
const { RegisterUser, LoginUser } = require('./Authcontroller/Auth');
const { createEnquiry, getEnquiries } = require('./Authcontroller/Enq');
const router = express.Router();

router.post('/login', LoginUser);
router.post('/register', RegisterUser);
router.post('/CreateEnquiry', createEnquiry);
router.get('/Enquiry', getEnquiries); // Corrected the URL here

module.exports = router;
