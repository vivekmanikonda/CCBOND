const express = require('express');
const { RegisterUser, LoginUser } = require('./Authcontroller/Auth');
const { createEnquiry, getEnquiry } = require('./Authcontroller/Enq');
const router = express.Router();

router.post('/login', LoginUser);
router.post('/register', RegisterUser);
router.post('/CreateEnquiry', createEnquiry);
router.get('/Enquiry', getEnquiry);

module.exports = router;
