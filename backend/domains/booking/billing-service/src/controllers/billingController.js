const { getBillingRecords, createBillingRecord } = require('../models/billingModel');

const getBilling = async (req, res) => {
  try {
    const records = await getBillingRecords();
    res.status(200).json(records);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching billing records', error: error.message });
  }
};

const createBilling = async (req, res) => {
  const billingData = req.body;

  if (!billingData || !billingData.id || !billingData.user_id || !billingData.amount || !billingData.status) {
    return res.status(400).json({ message: 'Invalid billing data' });
  }

  try {
    await createBillingRecord(billingData);
    res.status(201).json({ message: 'Billing record created successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error creating billing record', error: error.message });
  }
};

module.exports = { getBilling, createBilling };
