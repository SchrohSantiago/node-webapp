const express = require('express');
const dotenv = require('dotenv');
const routes = require('./routes');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use('/api/v1', routes);

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
