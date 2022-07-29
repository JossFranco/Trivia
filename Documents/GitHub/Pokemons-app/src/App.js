import React from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import  CreatePokemons  from './Components/CreatePokemons/CreatePokemons'
import { FormPokemon } from './Components/FormPokemons/FormPokemon'
import { Navbar } from './Components/Navbar/Navbar'
 const App = () => {


  return (
   <BrowserRouter>
      <Routes>
        <Route path="/" element={<FormPokemon />} />
        <Route path="appPokemon" element={<CreatePokemons />} />
      </Routes>
    </BrowserRouter>
  )
}
export default App
