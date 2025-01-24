const Discount = require('../models/discountModel');

const createDiscount = async (req, res) => {
  const { code, description, discountPercentage, validUntil } = req.body;

  if (!code || !discountPercentage || !validUntil) {
    return res.status(400).json({ error: 'Code, discount percentage, and validity date are required' });
  }

  const discount = new Discount({ code, description, discountPercentage, validUntil });
  await discount.save();

  res.status(201).json({ message: 'Discount created successfully', discount });
};

const getDiscounts = async (req, res) => {
  const discounts = await Discount.find();
  res.json(discounts);
};

const applyDiscount = async (req, res) => {
  const { code } = req.body;

  const discount = await Discount.findOne({ code });
  if (!discount || new Date(discount.validUntil) < new Date()) {
    return res.status(404).json({ error: 'Invalid or expired discount code' });
  }

  res.json({ message: 'Discount applied successfully', discountPercentage: discount.discountPercentage });
};

module.exports = { createDiscount, getDiscounts, applyDiscount };
