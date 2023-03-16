const router = require('express').Router();
const {
    deleteFriend,
    addNewFriend
    
} = require('../../controllers/friend-controller');

router.route('/:id/friend/:friendId').delete(deleteFriend).post(addNewFriend);

module.exports = router;