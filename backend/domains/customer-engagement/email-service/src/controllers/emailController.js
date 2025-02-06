const nodemailer = require("nodemailer");
const { validateEmailData } = require("../utils/validators");
const { formatEmailSubject } = require("../utils/formatters");
const { generateEmailId } = require("../utils/helpers");

exports.sendEmail = (req, res) => {
  const { recipient, subject, message } = req.body;

  if (!validateEmailData(req.body)) {
    return res.status(400).json({ error: "Invalid email data" });
  }

  const formattedSubject = formatEmailSubject(subject);
  const emailId = generateEmailId();

  let transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    secure: false,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    }
  });

  let mailOptions = {
    from: process.env.EMAIL_USER,
    to: recipient,
    subject: formattedSubject,
    text: message
  };

  transporter.sendMail(mailOptions, (err, info) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json({
      message: "Email sent successfully",
      emailId,
      info
    });
  });
};
