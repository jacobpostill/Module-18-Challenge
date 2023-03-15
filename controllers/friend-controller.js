const { User } = require('../models');

module.exports = {
    addNewFriend(req, res) {
    User.findOne({ _id: req.params.friendId })
    .then((friend) => {
        if (!friend) {
            res.status(404).json({ message: 'There is no friend with that id' })
        } else {
            User.findOneAndUpdate(
            { _id: req.params.id },
            { $addToSet: { friends: req.params.friendId } })
            .then((updatedUser) => {
            if (!updatedUser) {
                res.status(404).json({ message: 'There is no user with that id' })
            } else {
                User.findOneAndUpdate(
                { _id: req.params.friendId },
                { $addToSet: { friends: req.params.id } })
            .then(() => {
                res.status(200).json('Friend Added!')});}})
                .catch((err) => {
                console.log(err);
                res.status(500).json(err)});}
            });},

    deleteFriend(req, res) {
        User.findOne({ _id: req.params.friendId })
        .then((friend) => {
            if (!friend) {
                res.status(404).json({ message: 'There is no friend with that id' })
            } else {
                User.findOneAndUpdate(
                    { _id: req.params.id },
                    { $pull: { friends: req.params.friendId } },
                    { new: true })
                .then((updatedUser) => {
                if (!updatedUser) {
                    res.status(404).json({ message: 'There is no user with that id' })
                } else {
                    User.findOneAndUpdate(
                    { _id: req.params.friendId },
                    { $pull: { friends: req.params.id } },
                    { new: true })
                    .then(() => {
                        res.status(200).json('Friend Added!')});}})
                        .catch((err) => {
                        console.log(err);
                        res.status(500).json(err)
                    });}});}
}