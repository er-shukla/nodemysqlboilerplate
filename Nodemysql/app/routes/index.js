const express = require('express');
// const userRoutes = require('../website/userAuth/routes/userAuthRoutes');
const userAuthRoutes = require('../../app/website/userauth/routes/userAuthRoutes');

const router = express.Router();

// router.use('/user', userRoutes);
router.use('/user', userAuthRoutes);

module.exports = router;
