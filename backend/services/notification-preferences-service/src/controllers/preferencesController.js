const Preferences = require('../models/preferencesModel');

const setPreferences = async (req, res) => {
  const { userId, preferences } = req.body;

  if (!userId || !preferences) {
    return res.status(400).json({ message: 'User ID and preferences are required' });
  }

  try {
    const updatedPreferences = await Preferences.findOneAndUpdate(
      { userId },
      { preferences },
      { new: true, upsert: true }
    );

    res.status(200).json({ message: 'Preferences updated successfully', updatedPreferences });
  } catch (error) {
    res.status(500).json({ message: 'Error updating preferences', error });
  }
};

const getPreferences = async (req, res) => {
  const { userId } = req.params;

  try {
    const preferences = await Preferences.findOne({ userId });
    if (!preferences) {
      return res.status(404).json({ message: 'Preferences not found' });
    }
    res.status(200).json(preferences);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching preferences', error });
  }
};

module.exports = { setPreferences, getPreferences };
