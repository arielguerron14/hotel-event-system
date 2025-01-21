const Vendor = require('../models/vendorModel');

const addVendor = async (req, res) => {
  const { name, service, contactInfo } = req.body;

  if (!name || !service || !contactInfo) {
    return res.status(400).json({ error: 'Name, service, and contact information are required' });
  }

  const vendor = new Vendor({ name, service, contactInfo });
  await vendor.save();

  res.status(201).json({ message: 'Vendor added successfully', vendor });
};

const getVendors = async (req, res) => {
  const vendors = await Vendor.find();
  res.json(vendors);
};

const updateVendor = async (req, res) => {
  const { id } = req.params;
  const updates = req.body;

  const updatedVendor = await Vendor.findByIdAndUpdate(id, updates, { new: true });
  if (!updatedVendor) {
    return res.status(404).json({ error: 'Vendor not found' });
  }

  res.json({ message: 'Vendor updated successfully', vendor: updatedVendor });
};

const deleteVendor = async (req, res) => {
  const { id } = req.params;

  const deletedVendor = await Vendor.findByIdAndDelete(id);
  if (!deletedVendor) {
    return res.status(404).json({ error: 'Vendor not found' });
  }

  res.json({ message: 'Vendor deleted successfully' });
};

module.exports = { addVendor, getVendors, updateVendor, deleteVendor };
