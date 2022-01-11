const express = require('express');
const router = express.Router();
const sessionRouter = require('./session.js');
const usersRouter = require('./users.js');
const songsRouter = require('./songs')

router.use('/session', sessionRouter);
router.use('/songs', songsRouter);
router.use('/users', usersRouter);



module.exports = router;
