import React, { useState, useEffect} from 'react'
import './CreatePokemons.css'
import Axios from 'axios'

function  CreatePokemons  ()  {
const URL = 'https://bp-pokemons.herokuapp.com/'
const [data, setData] = useState({
    name:'',
    image:'',
    attack:'',
    defense:'',

})
function handle(e) {
const newdata = {...data}
newdata[e.target.id] = e.target.value
setData(newdata)
console.log(newdata)
}
function submit (e){
    e.preventDefault();
    Axios.post(URL,{
        id: Math.floor(Math.random()* (1000-1)+1),
        name: data.name,
        image: data.image,
        attack: parseInt(data.attack),
        defense: parseInt(data.defense),
        hp: 1,
        type: 'n/a',
        idAuthor:1

    })
    .then(res => {
console.log(res.data)
    })
}
  
return (
    <div className="container">
            <h2> Nuevo Pokemon </h2>
            <label className='labels'>Nombre:</label>
            <input onChange={(e)=>handle(e)} placeholder="Pokemon" id='name' clasName='inputs' type="text" value={data.name} /><br></br>
            <label className='labels'>Imagen:</label>
            <input onChange={(e)=>handle(e)} placeholder="URL" clasName='inputs' id='image' type="text" value={data.image}  />
            <label className='labels'>Ataque:</label>
            <input onChange={(e)=>handle(e)} placeholder="Ataque" clasName='inputs' id='attack' type="text" value={data.attack} /><br></br>
            <label className='labels'>Defensa:</label>
            <input onChange={(e)=>handle(e)} placeholder="Defensa" clasName='inputs' id='defense' type="text" value={data.defense} /><br></br>
            <div>
            <button onClick={(e)=> submit(e)} className='btnSave'>Guardar</button>
            <button className='btnCancel'>Cancelar</button>  
            </div>
    </div>

)}
export default CreatePokemons 