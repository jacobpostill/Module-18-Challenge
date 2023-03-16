const User = require('../models/User');

module.exports = {
  getUsers(req, res) {
    User.find()
      .then((users) => res.json(users))
      .catch((err) => res.status(500).json(err));
  },
  getSingleUser(req, res) {
    User.findOne({ _id: req.params.id })      
      .select('-__v')
      .populate('thoughts')
      .then((user) =>
        !user
          ? res.status(404).json({ message: 'No user with that ID' })
          : res.json(user)
      )
      .catch((err) =>{
        console.log(err)
         res.status(500).json(err)
        });  },
  // create a new user
  createUser(req, res) {
    User.create(req.body)
      .then((dbUserData) => res.json(dbUserData))
      .catch((err) => res.status(500).json(err));
  },

  updateUser(req, res) {
    User.findByIdAndUpdate(
      { _id: req.params.id },
      { $set: req.body },
      { new: true })
      .then((user) => 
        !user
          ? res.status(404).json({ message: 'No user with that ID' })
          : res.json(user)
      )
      .catch((err) =>{
        console.log(err)
         res.status(500).json(err)
        });  },

  deleteUser(req, res) {
    User.findByIdAndRemove({ _id: req.params.id })
      .then((user) => {
        if (!user) {
          return res.status(404).json({ message: 'No user with that ID' });
        }
        res.json({ message: 'User deleted successfully' });
      })
      .catch((err) => res.status(500).json(err));
  },
};
