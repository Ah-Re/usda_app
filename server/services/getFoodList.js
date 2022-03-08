const axios = require('axios');

function getFoodList(url) {
    axios.get(url).then(res => {
        for (let i = 0; i < 20; i++) {
            console.log(res.data[i].description);
            // console.log(res.data[i].foodNutrients[0].name);
            // console.log(res.data[i].foodNutrients[0].amount);
            // console.log(res.data[i].foodNutrients[1].name);
            // console.log(res.data[i].foodNutrients[1].amount);
            // console.log(res.data[i].foodNutrients[2].name);
            // console.log(res.data[i].foodNutrients[2].amount);
            // console.log(res.data[i].foodNutrients[3].name);
            // console.log(res.data[i].foodNutrients[3].amount);
            // console.log(res.data[i].foodNutrients[8].name);
            // console.log(res.data[i].foodNutrients[8].amount);
        }







    })
}

module.exports = {
    getFoodList
}