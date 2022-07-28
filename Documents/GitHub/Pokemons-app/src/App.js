import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Pokemon } from '../src/Components/pokemons/Pokemon'
 const App = () => {
  return (
<BrowserRouter>
<Routes>
<h1>Listado de Pokemons</h1>
  <Route path="/" element={ <Pokemon/> }  />
</Routes>
</BrowserRouter>
  )
}
export default App
