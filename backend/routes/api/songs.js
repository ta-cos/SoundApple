const express = require('express');
const asyncHandler = require('express-async-handler');
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');
const { setTokenCookie, requireAuth } = require('../../utils/auth');
const tracksRepository = require("../../db/tracksRepository");

const router = express.Router();

router.get('/', asyncHandler(async function (_req, res) {
    const tracks = await tracksRepository.list();
    return res.json(tracks);
}));

router.post('/', requireAuth, asyncHandler(async function (_req, res) {
    const tracks = await tracksRepository.addSong();
    return res.json(tracks);
}));
module.exports = router;
