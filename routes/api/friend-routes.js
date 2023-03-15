const router = require('express').Router();
const {
    addNewFriend,
    deleteFriend
} = require('../../controllers/friend-controller');

router.route('/:id').post(addNewFriend).delete(deleteFriend);


module.exports = router;