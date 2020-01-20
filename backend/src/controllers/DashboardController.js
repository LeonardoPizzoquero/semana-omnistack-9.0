const User = require('../models/User');
const Spot = require('../models/Spot');

module.exports = {
  async show(req, res) {
    const { user_id } = req.headers;

    const userExists = await User.findById(user_id);

    if (!userExists) {
      return res.status(401).json({ error: 'You have no permission to access!' });
    }

    const spots = await Spot.find({ user: user_id });

    return res.json(spots);
  }
}