import React from "react";
import { useState, useEffect } from "react";
import { GrTrash } from "react-icons/gr";
import { FaEdit } from "react-icons/fa";

export const Pokemon = () => {
  const [name, setName] = useState([]);
  const [search, setSearch] = useState("");

  const getPokemons = async () => {
    const db = await fetch("https://bp-pokemons.herokuapp.com/?idAuthor=1");
    setSearch(await db.clone().json());
    setName(await db.json());
  };
  const seachPokemons = async (x) => {
    //  const vlr = e.target.value
    console.log(x.target.value);
    setName(await search.filter((e) => e.name === x.target.value));
  };

  useEffect(() => {
    getPokemons();
    console.log(name, "hola");
  }, []);
  return (
    <>
      
      <input type="text" className="" onChange={seachPokemons}></input>
      <tr>
        <th>Nombre</th>
        <th>Imagen</th>
        <th>Ataque</th>
        <th>Defensa</th>
        <th>Acciones</th>
      </tr>
      <div>
        {name.map((poke) => (
          <tr key={poke.id}>
            <td>{poke.name}</td>
            <td>
              <img alt="" width="40px" height="40px" src={poke.image} />
            </td>
            <td>{poke.attack}</td>
            <td>{poke.hp}</td>
            <td>
              <FaEdit />
              <GrTrash />
            </td>
          </tr>
        ))}
      </div>
    </>
  );
};
