const { Album } = require("./models");

async function list() {
    return await Album.findAll();
}

async function albumsByUserId(userId) {
    return await Album.findAll({
        where: {
            userId,
        },
    });
}

async function addAlbum(details) {
    const { userId, title, img } = details;
    if (img === '') {
        const album = await Album.create({
            userId,
            title
        })
        return await Album.findByPk(album.id)
    } else {
        const album = await Album.create({
            ...details,
        });
        return await Album.findByPk(album.id);
    }
}

async function deleteAlbum(AlbumId) {
    const album = await Album.findByPk(AlbumId);
    if (!album) throw new Error('Cannot find item');

    await Album.destroy({ where: { id: album.id } });
    return album.id;
}

async function updateAlbum(details) {
    const id = details.id;
    delete details.id;
    console.log({ details, id });
    await Album.update(
        details,
        {
            where: { id },
            returning: true,
            plain: true,
        }
    );
    return await Album.findByPk(id);
}

module.exports = {
    albumsByUserId,
    addAlbum,
    deleteAlbum,
    updateAlbum,
    list,
};
