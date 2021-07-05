const fsp = require('fs').promises;
const { join } = require('path');

const jsonPath = join(__dirname, 'task-05/controller', 'countryController.js' );
// const jsonPath2 = join(__dirname, 'task-05/db', 'db.js' );
// const jsonPath3 = join(__dirname, 'task-05/router', 'countryRouter.js' );


const fullText = async (list = []) => {
    await fsp.writeFile(jsonPath, JSON.stringify(list, null, 4), 'utf8');
    return true;
};

const wordExchange = () => {
    fullText.replaceAll('car','country');
    //... majd befjezem, keson jutott eszembe
}

module.exports = {
    wordExchange
};