let myFavorites = [];

function postFav(req, res) {
    const { body } = req;
    myFavorites.push(body);
    res.json(myFavorites);
}

function deleteFav(req, res) {
    const { id } = req.params;
    myFavorites = myFavorites.filter((char) => char.id !== Number(id))
    res.json(myFavorites);
    console.log(typeof id);
}


module.exports = {
    postFav,
    deleteFav
}