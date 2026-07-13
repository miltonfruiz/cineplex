import React, { useState, useEffect } from 'react';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

interface Pelicula {
  _id: string;
  titulo: string;
  descripcion: string;
  duracion: number;
  genero: string;
}

const App: React.FC = () => {
  const [peliculas, setPeliculas] = useState<Pelicula[]>([]);
  const [titulo, setTitulo] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [duracion, setDuracion] = useState(0);
  const [genero, setGenero] = useState('');

  useEffect(() => {
    fetch(`${API_URL}/api/peliculas`)
      .then(response => response.json())
      .then(data => setPeliculas(data));
  }, []);

  const handleRegister = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    fetch(`${API_URL}/api/auth/register`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ titulo, descripcion, duracion, genero }),
    })
      .then(response => response.json())
      .then(data => console.log(data));
  };

  const handleLogin = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    fetch(`${API_URL}/api/auth/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ titulo, descripcion, duracion, genero }),
    })
      .then(response => response.json())
      .then(data => console.log(data));
  };

  const handleCreatePelicula = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    fetch(`${API_URL}/api/peliculas`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ titulo, descripcion, duracion, genero }),
    })
      .then(response => response.json())
      .then(data => setPeliculas([...peliculas, data]));
  };

  const handleDeletePelicula = (id: string) => {
    fetch(`${API_URL}/api/peliculas/${id}`, { method: 'DELETE' })
      .then(() => setPeliculas(peliculas.filter(pelicula => pelicula._id !== id)));
  };

  return (
    <div>
      <h1>Peliculas</h1>
      <ul>
        {peliculas.map(pelicula => (
          <li key={pelicula._id}>
            <h2>{pelicula.titulo}</h2>
            <p>{pelicula.descripcion}</p>
            <p>Duracion: {pelicula.duracion}</p>
            <p>Genero: {pelicula.genero}</p>
            <button onClick={() => handleDeletePelicula(pelicula._id)}>Delete</button>
          </li>
        ))}
      </ul>
      <form onSubmit={handleCreatePelicula}>
        <label>
          Titulo:
          <input type="text" value={titulo} onChange={event => setTitulo(event.target.value)} />
        </label>
        <label>
          Descripcion:
          <input type="text" value={descripcion} onChange={event => setDescripcion(event.target.value)} />
        </label>
        <label>
          Duracion:
          <input type="number" value={duracion} onChange={event => setDuracion(Number(event.target.value))} />
        </label>
        <label>
          Genero:
          <input type="text" value={genero} onChange={event => setGenero(event.target.value)} />
        </label>
        <button type="submit">Create Pelicula</button>
      </form>
    </div>
  );
};

export default App;