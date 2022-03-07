const express = require('express')
const app = express()
const dotenv = require('dotenv')
const path = require('path')

// Configure dotenv
dotenv.config({
    path: 'config.env'
});

const PORT = process.env.PORT || 8080;
const api = process.env.API_KEY;

// Set view engine
app.set('view engine', 'ejs')

// Load assets
app.use(express.static(path.join(__dirname, 'public')))

app.get("/", (req, res) => {
    res.render('index');
})

app.get("/cart", (req, res) => {
    res.render('cart');
})

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
})