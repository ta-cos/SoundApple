const express = require('express');
const asyncHandler = require('express-async-handler');
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');
const { setTokenCookie, requireAuth } = require('../../utils/auth');
const tracksRepository = require("../../db/tracksRepository");

const router = express.Router();

router.get('/', asyncHandler(async function (_req, res) {
    console.log('*************************')
    const tracks = await tracksRepository.list();
    console.log('*************************')

    console.log(tracks)
    return res.json(tracks);
}));

module.exports = router;
