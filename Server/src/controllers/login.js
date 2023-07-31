const users = require('../utils/login');

function login(req, res) {
    const { email, password } = req.query;
    const verifiedUser = users.find((user) => user.email === email && user.password === password);

    if (verifiedUser) {
        return res.status(200).json({access: true});
    } else {
        return res.status(204).json({access: false});
    }
}

module.exports = login;