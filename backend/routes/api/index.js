const express = require('express');
const router = express.Router();
const sessionRouter = require('./session.js');
const usersRouter = require('./users.js');
const songsRouter = require('./songs')
const albumsRouter = require('./album')

router.use('/session', sessionRouter);
router.use('/songs', songsRouter);
router.use('/users', usersRouter);
router.use('/albums', albumsRouter)



module.exports = router;
