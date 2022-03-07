const express = require('express')
const app = express()
const dotenv = require('dotenv')

dotenv.config({
    path: 'config.env'
});

const PORT = process.env.PORT || 8080;
const api = process.env.API_KEY;

app.set('view engine', 'ejs')

app.get("/", (req, res) => {
    res.render('index');
})

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
})