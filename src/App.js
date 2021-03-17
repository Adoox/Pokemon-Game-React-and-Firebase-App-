import React, {useEffect, useState} from 'react'
import './App.css';
import PokemonCard from './component/PokemonCard'
import Signup from './component/Signup'
import LoadingGif from './images/pokeball.gif'
import NavBar from './component/Navbar'
import Button from 'react-bootstrap/Button';
import {getPokemon, getAllPokemon} from './services/pokemon'
import { AuthProvider } from './contexts/AuthContext';

function App() {
  const [pokedeck, setPokedeck] = useState([]);
  const [nextUrl, setNextUrl] = useState(' ');
  const [prevUrl, setPrevUrl] = useState(' ');
  const [loading, setLoading] = useState(true);
  const initialURL='https://pokeapi.co/api/v2/pokemon';

  useEffect(() => {
    async function fetchData() {
      let response = await getAllPokemon(initialURL)
      setNextUrl(response.next);
      setPrevUrl(response.previous);
      await loadPokemon(response.results);
      console.log(response);
      setLoading(false);
    }
    fetchData();
  }, [])

  const next = async () => {
    setLoading(true);
    let data = await getAllPokemon(nextUrl);
    await loadPokemon(data.results);
    setNextUrl(data.next);
    setPrevUrl(data.previous);
    setLoading(false);
  }

  const prev = async () => {
    if (!prevUrl) return;
    setLoading(true);
    let data = await getAllPokemon(prevUrl);
    await loadPokemon(data.results);
    setNextUrl(data.next);
    setPrevUrl(data.previous);
    setLoading(false);
  }

  const loadPokemon = async (data) => {
    let _pokemonData = await Promise.all(data.map(async pokemon => {
      let pokemonRecord = await getPokemon(pokemon)
      return pokemonRecord
    }))
    setPokedeck(_pokemonData);
    console.log(_pokemonData);
  }

  return (
    <>
    <NavBar/>
    <AuthProvider>
      <Signup/>
    </AuthProvider>
    <div className="App container overflow-hidden">
      <br/>
      <br/>
      <div>
        <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </h3>
      </div>
      <br/>
      <div className="navbar-btn-box">
        <Button onClick={next} variant="success">Next</Button>
        <Button onClick={prev} variant="primary">Previous</Button>
      </div>
      <br/>
      <br/>
      {
      loading ? 
      <div className="loading-screen">
       <img src={LoadingGif}/>
      </div> 
      : <div className="row gx-3 gy-4 row-cols-1 row-cols-sm-2 row-cols-md-4">  
        {
          pokedeck.map((pokemon,index)=>{
            return <PokemonCard key={index} pokemon={pokemon}/>
          })
        }
        </div>
      }
    </div>
    </>
  );
}

export default App;
