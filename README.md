# node-webapp
# npm init
# npm i express
# npm i axios
# configurar .env (sample.env)
# api key

# ------ UPCOMMING genaro weis -------

ES UN MIX DE VARIOS TEMAS:
se titula upcomming pero los 3 endpoints son:

- `upcoming movies` : list
- `alternative_title` : id
- `upcoming movies` : query

esto se debe a que no quedaba un tema especifico para trabajar

# ------------------------------------

# API de Series

## Endpoints

### Listado de Series
`GET /api/v1/series`

#### Parámetros opcionales:
- `page`: Página de resultados (default: 1)
- `lang`: Idioma de los resultados (default: en)
- `category`: Filtrar por categoría (género)
- `year`: Filtrar por año
- `order`: Ordenar los resultados

### Obtener Serie por ID
`GET /api/v1/series/:id`

#### Parámetros:
- `id`: ID de la serie
### Listado de Series Mejor Valoradas (Top Rated)
`GET /api/v1/series/top-rated`

#### Parámetros opcionales:
- `page`: Página de resultados (default: 1)
- `lang`: Idioma de los resultados (default: en)

***PENDIENTE***
CONTROLLERS: 
1- ojo con esa config de axios del principio, el profe no lo hizo
2- el profe usa direcatemente axios.get y la url
3- el profe usa request y response