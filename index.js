// index.js
const express = require('express');
const dotenv = require('dotenv');
const moviesRoutes = require('./routes/moviesRoutes');
const seriesRoutes = require('./routes/seriesRoutes');
const peopleRoutes = require('./routes/peopleRoutes');
const upcomingRoutes = require('./routes/upcomingMoviesRoutes');


dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Usar las rutas de películas
app.use('/app/movies', moviesRoutes);
app.use('/app/series', seriesRoutes);
app.use('/app/people', peopleRoutes);
app.use('/app/upcoming', upcomingRoutes);

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
