const express = require('express')
const app = express()
const dotenv = require('dotenv')
const path = require('path')
const {
    getFoodList
} = require('./server/services/getFoodList');




// Configure dotenv
dotenv.config({
    path: 'config.env'
});

const PORT = process.env.PORT || 8080;
const api = process.env.API_KEY;
const foodListUrl = "https://api.nal.usda.gov/fdc/v1/foods/list?api_key=" + api;


// Set view engine
app.set('view engine', 'ejs')

// Load assets
app.use(express.static(path.join(__dirname, 'public')))

app.get("/", (req, res) => {
    getFoodList(foodListUrl);
    res.render('index');
})

app.get("/cart", (req, res) => {
    res.render('cart');
})

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
})