const router = require('express').Router();
const api = require('./api');

router.use('/api', api);

router.use((req, res) => {
  return res.send('No route');
});

module.exports = router;