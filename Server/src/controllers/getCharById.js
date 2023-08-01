const axios = require('axios');
const URL = "https://rickandmortyapi.com/api/character/";

async function getCharById(req, res) {
    try {
        const {id} = req.params;
        const { name, gender, species, origin, image, location, status } = (await axios(URL + id)).data
        const character = {
            id: Number(id),
            name,
            gender,
            species,
            origin,
            image,
            location,
            status
        }
        return character ? res.status(200).json(character) : res.status(404).send('Character not found');
    } catch (error) {
        return res.status(500).send(error.mesage);  
    }
}

module.exports = getCharById;