const { Track } = require("./models");

async function list() {
    return await Track.findAll();
}

async function songsByUserId(userId) {
    return await Track.findAll({
        where: {
            userId,
        },
    });
}

async function addSong(details, userId) {
    const song = await Track.create({
        ...details,
        userId,
    });
    return await Track.findByPk(item.id);
}

async function deleteSong(songId) {
    const Track = await Track.findByPk(songId);
    if (!song) throw new Error('Cannot find item');

    await Track.destroy({ where: { id: song.id } });
    return song.id;
}

async function updatesong(details) {
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
    updatesong,
    list,
};
