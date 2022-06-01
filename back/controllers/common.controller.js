const jwt = require('jsonwebtoken');

function login(req, res){
    const username = req.body.username;
    const password = req.body.password;

    if(username === process.env.TITANIC_USERNAME && password === process.env.TITANIC_PASSWORD){
        const user = {
            name: username
        };

        const jwtToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET)
        return res.status(200).json({ accessToken: jwtToken });
    }
    return res.status(403);
}

module.exports = {
    login
}