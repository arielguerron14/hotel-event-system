const nodemailer = require('nodemailer');

const sendSupportEmail = async (ticket) => {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASSWORD,
    },
  });

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: 'support@hotel.com',
    subject: `New Support Ticket: ${ticket._id}`,
    text: `Issue: ${ticket.issue}\nPriority: ${ticket.priority}\nStatus: ${ticket.status}`,
  };

  await transporter.sendMail(mailOptions);
};

module.exports = { sendSupportEmail };
