const PDFDocument = require('pdfkit');

const generatePDF = async (invoice) => {
  const doc = new PDFDocument();
  let buffers = [];

  doc.on('data', buffers.push.bind(buffers));
  doc.on('end', () => {});

  doc.fontSize(20).text('Invoice', { align: 'center' });
  doc.text(`Invoice ID: ${invoice._id}`, { align: 'left' });
  doc.text(`User ID: ${invoice.userId}`);
  doc.text(`Amount: $${invoice.amount.toFixed(2)}`);
  doc.text(`Details: ${invoice.details}`);
  doc.text(`Date: ${new Date(invoice.date).toLocaleString()}`, { align: 'right' });

  doc.end();
  return Buffer.concat(buffers);
};

module.exports = { generatePDF };
