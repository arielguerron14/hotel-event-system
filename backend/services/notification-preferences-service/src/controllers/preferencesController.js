const Preferences = require('../models/preferencesModel');

const updatePreferences = async (req, res) => {
  const { userId, preferences } = req.body;

  if (!userId || !preferences) {
    return res.status(400).json({ message: 'UserId and preferences are required' });
  }

  try {
    const updatedPreferences = await Preferences.findOneAndUpdate(
      { userId },
      { preferences },
      { new: true, upsert: true }
    );
    res.status(200).json(updatedPreferences);
  } catch (err) {
    res.status(500).json({ message: 'Failed to update preferences', error: err });
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
  } catch (err) {
    res.status(500).json({ message: 'Failed to retrieve preferences', error: err });
  }
};

module.exports = { updatePreferences, getPreferences };
