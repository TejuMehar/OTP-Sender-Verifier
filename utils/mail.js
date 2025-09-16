const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "webcultivate01@gmail.com",
    pass: "ysdz zrwp cmyb zbzg"
  },
});

module.exports = transporter;