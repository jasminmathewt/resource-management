const mongoose = require('mongoose');
const UserDetails = mongoose.model('UserDetails');

exports.createUser = (req, res) => {
  const newUser = new UserDetails(req.body);
  newUser.save((err, user) => {
    if (err) res.send(err);
    res.json(user);
  });
};