const express = require('express');
const asyncHandler = require('express-async-handler');
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');
const { setTokenCookie, requireAuth } = require('../../utils/auth');
const albumsRepo = require("../../db/albumsRepo");

const router = express.Router();

router.get('/', asyncHandler(async function (_req, res) {
    const albums = await albumsRepo.list();
    return res.json(tracks);
}));

router.post('/', requireAuth, asyncHandler(async function (_req, res) {
    const albums = await albumsRepo.addAlbum(_req.body);
    return res.json(albums);
}));

router.post('/:id', requireAuth, asyncHandler(async function (_req, res) {
    const albums = await albumsRepo.updateAlbum(_req.body);
    return res.json(albums);
}));

router.delete('/:id', requireAuth, asyncHandler(async function (_req, res) {
    const id = _req.params.id
    const albumId = await albumsRepo.deletealbum(id);
    return res.json(albumId);
}));

module.exports = router;
