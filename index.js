// index.js
const express = require('express');
const dotenv = require('dotenv');
const moviesRoutes = require('./routes/moviesRoutes');
const seriesRoutes = require('./routes/seriesRoutes');


dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Usar las rutas de películas
app.use('/app', moviesRoutes);
app.use('/api/v1/series', seriesRoutes);


app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
