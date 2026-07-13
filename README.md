# Sistema de gestión de películas para cine
## Stack
* Node.js
* Express.js
* MongoDB
* Docker

## Installation
1. Clone the repository: `git clone https://github.com/your-repo/sistema-de-gestion-de-peliculas.git`
2. Install dependencies: `npm install`
3. Create a `.env` file with your MongoDB URI: `MONGO_URI=mongodb://localhost:27017/sistema-de-gestion-de-peliculas`
4. Start the server: `npm start`

## Docker
1. Build the Docker image: `docker build -t sistema-de-gestion-de-peliculas .`
2. Run the Docker container: `docker run -p 5000:5000 sistema-de-gestion-de-peliculas`

## Endpoints
The following endpoints are available:
### Auth
* **POST /api/auth/register**: register a new user
* **POST /api/auth/login**: login user

### Peliculas
* **GET /api/peliculas**: list all movies (requires authentication)
* **POST /api/peliculas**: create a new movie (requires authentication)
* **GET /api/peliculas/:id**: get a movie by id (requires authentication)
* **PUT /api/peliculas/:id**: update a movie (requires authentication)
* **DELETE /api/peliculas/:id**: delete a movie (requires authentication)

### Salas
* **GET /api/salas**: list all theaters (requires authentication)
* **POST /api/salas**: create a new theater (requires authentication)
* **GET /api/salas/:id**: get a theater by id (requires authentication)
* **PUT /api/salas/:id**: update a theater (requires authentication)
* **DELETE /api/salas/:id**: delete a theater (requires authentication)

### Horarios
* **GET /api/horarios**: list all showtimes (requires authentication)
* **POST /api/horarios**: create a new showtime (requires authentication)
* **GET /api/horarios/:id**: get a showtime by id (requires authentication)
* **PUT /api/horarios/:id**: update a showtime (requires authentication)
* **DELETE /api/horarios/:id**: delete a showtime (requires authentication)

## Security
* All endpoints that require authentication use JSON Web Tokens (JWT) to verify user identity.
* Passwords are hashed using bcrypt before being stored in the database.
* The `MONGO_URI` environment variable should be set to a secure MongoDB connection string.
* The server uses HTTPS to encrypt all communication between the client and server.
* The `port` environment variable should be set to a secure port number (e.g. 5000).
* The `mongoUri` environment variable should be set to a secure MongoDB connection string.

## Main Model
The main model for this system is the `Pelicula` model, which has the following fields:
* `titulo`: String
* `descripcion`: String
* `duracion`: Number
* `genero`: String