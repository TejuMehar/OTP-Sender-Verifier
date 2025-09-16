const  Otp = require('../models/otpSchema.js');
const transporter =require('../utils/mail.js');


const sendOtp = async (req, res) => {
  try {
    const { email } = req.body;
    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    await Otp.create({ email, otp });
    
    await transporter.sendMail({
      from: "webcultivate01@gmail.com",
      to: email,
      subject: "Your OTP Code",
      text: `Your OTP is ${otp}. It is valid for 5 minutes.`
    });
    res.json({ message: "OTP sent successfully" });
  } catch (error) {
    res.status(500).json({ message: " Failed to send OTP", error });
  }
};


const verifyOtp = async (req, res) => {
  try {
    const { email, otp } = req.body;
    const record = await Otp.findOne({ email, otp });
    if (!record) {
      return res.status(400).json({ message: "Invalid or expired OTP" });
    }
    await Otp.deleteOne({ email, otp }); 
    res.json({ message: "OTP verified successfully" });
  } catch (error) {
    res.status(500).json({ message: "Verification failed", error });
  }
};


module.exports = { sendOtp, verifyOtp };