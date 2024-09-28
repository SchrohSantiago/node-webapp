# https://node-webapp-boo0.onrender.com   URL DEL DEPLOY
 
## Endpoints = PELICULAS 

URL: app/movies/popular
Método: GET
Descripción: Obtiene una lista de las películas más populares. Realiza múltiples solicitudes para obtener datos de las primeras tres páginas.

URL: app/movies/:movie_id/credits
Método: GET
Descripción: Obtiene los créditos de una película específica utilizando su ID.

URL: app/movies/:movie_id/recommendations
Método: GET
Descripción: Obtiene una lista de películas recomendadas basadas en una película específica utilizando su ID.

URL: app/movies/genre
Método: GET
Descripción: Obtiene una lista de películas filtradas por un género específico.

Parámetros:
genre_id: ID del género (obligatorio).
page: Número de página (opcional).

ID de generos disponibles: 

28: Acción   
12: Aventura
16: Animación
35: Comedia
80: Crimen
18: Drama
10749: Romance
27: Terror 

 http://localhost:3008/app/movies/genre?genre_id=2


## ENDPOINTS = UPCOMING

URL: app/movies/upcoming
Método: GET
Descripción: Obtiene una lista de las películas que se lanzarán próximamente.

# Se llama mediante upcoming para evitar confusiones, pero trae los titulos alternativos. Eato lo hicimos debido a que la api no disponia de topicos para buscar 

URL: app/movies/:id/alternative_titles
Método: GET
Descripción: Obtiene una lista de títulos alternativos para una película específica utilizando su ID.

URL: app/movies/upcoming/popularity
Método: GET
Descripción: Obtiene una lista de películas próximas ordenadas por popularidad.

Parámetros:
sortBy: Especifica cómo se ordenarán las películas (solo 'popularity' en este caso).

# http://localhost:3008/app/upcoming?sortBy=popularity 



# ENDPOINTS = PEOPLE

URL: app/people/popular

Método: GET

Descripción: Obtiene una lista de las personas más populares en la base de datos.



URL: app/people/:id

Método: GET

Descripción: Obtiene los detalles de una persona específica utilizando su ID.

Parámetros:

id: ID de la persona.

# ENDPOINT = SERIES