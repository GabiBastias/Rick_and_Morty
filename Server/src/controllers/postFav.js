const { Favorite } = require('../DB_connection');

const postFav = async(req, res) => {
    try {
        const { id, name, status, species, gender, origin, location, image } = req.body;
        console.log(req.body);
        if (!id || !name || !origin || !status || !image || !species || !gender || !location) {
            return res.status(401).send('Faltan datos');
        } else {
            await Favorite.findOrCreate({
                where: {
                    id, name, origin, status, image, species, gender, location
                }
            });
            const favorites = await Favorite.findAll();
            return res.status(200).json(favorites);
        }
    } catch (error) {
        console.log(error.message);
        return res.status(500).json({error: error.message});
    }
}

module.exports = postFav;