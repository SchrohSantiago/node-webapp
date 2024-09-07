
const dotenv = require('dotenv');
dotenv.config();

module.exports = {
    apiUrl: process.env.API_URL,
    apiKey: process.env.API_KEY
};
