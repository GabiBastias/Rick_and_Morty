const axios = require('axios');
const URL = "https://rickandmortyapi.com/api/character/";

function getCharById(req, res) {
    const {id} = req.params;
    axios(URL + id)
    .then(({data}) => {
        if (data.id) {
            const character = {
                id: data.id,
                name: data.name,
                gender: data.gender,
                species: data.species,
                origin: data.origin,
                image: data.image,
                location: data.location,
                status: data.status
            }
            return res.status(200).json(character);
        } else {
            return res.status(404).send('Not found')
        }
    })
    .catch(error => {
        return res.status(500).send(error.mesage);
    })
}

module.exports = getCharById;