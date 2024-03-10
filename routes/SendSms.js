const express = require("express");
const router = express.Router();

const sendSms = require("../controllers/SendSms");//import receive 
router.route("/").get(sendSms);

module.exports = router;