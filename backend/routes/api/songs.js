const express = require('express');
const asyncHandler = require('express-async-handler');
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');
const { setTokenCookie, requireAuth } = require('../../utils/auth');
const { db } = require('../../config');

const router = express.Router();

router.get('/', asyncHandler(async function (_req, res) {
    const songs = await db.Tracks.findAll();
    console.log(songs)
    return res.json(songs);
}));
