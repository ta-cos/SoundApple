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
    const tracks = await tracksRepository.addSong(_req.body);
    return res.json(tracks);
}));

router.post('/:id', requireAuth, asyncHandler(async function (_req, res) {
    const tracks = await tracksRepository.updateSong(_req.body);
    return res.json(tracks);
}));

router.delete('/:id', requireAuth, asyncHandler(async function (_req, res) {
    const id = _req.params.id
    console.log(id)
    const songId = await tracksRepository.deleteSong(id);
    return res.json(songId);
}));

module.exports = router;
