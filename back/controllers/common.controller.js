function login(req, res){
    const username = req.body.username;
    const password = req.body.password;

    if(username === process.env.TITANIC_USERNAME && password === process.env.TITANIC_PASSWORD){
        return res.status(200);
    }
    return res.status(403);
}

module.exports = {
    login
}