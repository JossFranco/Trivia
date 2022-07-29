import React from "react";
import { useState, useEffect } from "react";
import { GrTrash } from "react-icons/gr";
import { FaEdit } from "react-icons/fa";
import './FormPokemon.css'
import  CreatePokemons  from '../../Components/CreatePokemons/CreatePokemons'

export const FormPokemon = () => {
  const [name, setName] = useState([]);
  const [search, setSearch] = useState('');
  const [edit, setEdit] = useState()
  const [mostrarForm, setMostrarForm] = useState(false)

  const URL ="https://bp-pokemons.herokuapp.com/?idAuthor=1"

  const getPokemons = async () => {
    const response = await fetch(URL)
    const data = await response.json()
    console.log (data)
    setName(data)
  }

 const searcher = (e) => {
  setSearch(e.target.value)
 }

 const onClickMostrarForm = (e) => {
  e.preventDefault()
  setMostrarForm(true)

 }

 let results = []
if(!search) {
  results = name
}else{
  results = name.filter((dato)=>
  dato.name.toLowerCase().includes(search.toLowerCase()))
}
const editPokemons = () => {

}
  useEffect(() => {
    console.log("hola")
    getPokemons()
 
  }, [])

   return (
    <>
    <form className="form">
      <input
        value={search}
       type="text"
        className="formInput"
        placeholder="🔍 Buscar"
        onChange={searcher}
        />
         <button className='btnAdd' onClick={(e) => onClickMostrarForm(e)}> + Nuevo</button>
    </form>
   <section className="Table">
   <tbody className='TableHeader'> 
      <tr>
        <th>Nombre</th>
        <th>Imagen</th>
        <th>Ataque</th>
        <th>Defensa</th>
        <th>Acciones</th>
      </tr>
        {results.map((name) => (
          <tr key={name.id}>
            <td>{name.name}</td>
            <td>
              <img alt="" width="40px" height="40px" src={name.image} />
            </td>
            <td>{name.attack}</td>
            <td>{name.hp}</td>
            <td>
            &nbsp;&nbsp;&nbsp;
              <FaEdit />
              &nbsp;&nbsp;&nbsp;
              <GrTrash />
              &nbsp;&nbsp;&nbsp;
            </td>
          </tr>
        ) 
        )}
        </tbody>
     
      {mostrarForm &&  <CreatePokemons />}
     </section>
    </>
    
  );
        }
