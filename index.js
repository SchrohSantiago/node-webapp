// index.js
const express = require('express');
const dotenv = require('dotenv');
const moviesRoutes = require('./routes/moviesRoutes');
const seriesRoutes = require('./routes/seriesRoutes');
const upcomingRoutes = require('./routes/upcomingMoviesRoutes');
const peopleRoutes = require('./routes/peopleRoutes')
const cors = require('cors');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use(cors());
  

// Usar las rutas de películas
app.use('/app/movies', moviesRoutes);
app.use('/app/series', seriesRoutes);
app.use('/app/people', peopleRoutes);
app.use('/app/upcoming', upcomingRoutes)


app.listen(PORT,'0.0.0.0', () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
