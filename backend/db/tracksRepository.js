const { Track } = require("./models");
const { Album } = require("./models")

async function list() {
    return await Track.findAll({ include: Album });
}

async function songsByUserId(userId) {
    return await Track.findAll({
        where: {
            userId,
        },
    });
}

async function getOneSong(trackId) {
    return await Track.findByPk(trackId)
}

async function addSong(details) {

    const song = await Track.create({
        ...details,
    });
    return await Track.findByPk(song.id);
}

async function deleteSong(songId) {
    const song = await Track.findByPk(songId);
    if (!song) throw new Error('Cannot find item');

    await Track.destroy({ where: { id: song.id } });
    return song.id;
}

async function updateSong(details) {
    const id = details.id;
    delete details.id;
    console.log({ details, id });
    await Track.update(
        details,
        {
            where: { id },
            returning: true,
            plain: true,
        }
    );
    return await Track.findByPk(id);
}

module.exports = {
    songsByUserId,
    addSong,
    deleteSong,
    updateSong,
    list,
    getOneSong
};
