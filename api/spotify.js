const fetch = require('node-fetch');

module.exports = async (req, res) => {
    const client_id = process.env.CLIENT_ID;
    const client_secret = process.env.CLIENT_SECRET;
    const refresh_token = process.env.REFRESH_TOKEN;

    const tokenRespone = await fetch('https://accounts.spotify.com/api/token', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': 'Basic ' + Buffer.from(client_id + ':' + client_secret).toString('base64')
        },
        body: 'grant_type=refresh_token&refresh_token=' + refresh_token
    });

    const tokenData = await tokenRespone.json();    
    const accessToken = tokenData.access_token;

    const userResponse = await fetch('https://api.spotify.com/v1/me/player/currently-playing', {
        headers: {
            'Authorization': 'Bearer ' + accessToken
        }
    });

    const userData = await userResponse.json();
    
    res.json(userData);
};