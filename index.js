const express = require('express');
const dotenv = require('dotenv');
const routes = require('./routes/index.js');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use('/app', routes);

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
