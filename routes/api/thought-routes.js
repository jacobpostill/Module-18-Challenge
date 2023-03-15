const router = require('express').Router();
const {
    getThought,
    getSingleThought,
    createThought,
    updateThought,
    deleteThought
} = require('../../controllers/thought-controller');

router.route('/').get(getThought).post(createThought);
router.route('/:id').get(getSingleThought).put(updateThought).delete(deleteThought);


module.exports = router;