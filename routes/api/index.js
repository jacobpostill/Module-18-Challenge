const router = require('express').Router();
const userRoutes = require('./user-routes');
const thoughtRoutes = require('./thought-routes');
const friendsRoutes = require('./friend-routes');

router.use('/user', userRoutes);
router.use('/thought', thoughtRoutes);
router.use('/', friendsRoutes);

module.exports = router;