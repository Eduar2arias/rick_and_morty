import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import {Link,NavLink} from "react-router-dom"
import style from "./Detail.module.css"

export default function Detail(props) {
  const [character, setCharacter] = useState({});

  const {characters} = props

  const { detailId } = useParams();

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/${detailId}`)
      .then((response) => response.json())
      .then((char) => {
         console.log(char);
        if (char.name) {
          setCharacter(char);
        } else {
          window.alert("No hay personajes con ese ID");
        }
      })
      .catch((err) => {
        window.alert("No hay personajes con ese ID");
      });
    return setCharacter({});
  }, [detailId]);


  return (
    <div className={style.container_detail}>
      <div >

      <h1>Lista de Personajes</h1>
      {
        characters.map((e , i) =>
        <NavLink className={style.list} to={`/detail/${e.id}`}>
        <div>
            
           <h2 key= {i}>{e.name} </h2>
        </div>
        </NavLink>
        ) 
      }
      </div>
      <div className={style.detail}>
         <h2>informacion Personaje</h2>
         <div>
         
            <img src= {character.image}alt="" width='300px' />
            <h2>Nombre: {character.name}</h2>
            <h2>Status: {character.status}</h2>
            <h2>Specie: {character.species}</h2>
            {/* {console.log(character.)} */}
            <h2>ORIGIN: {character.origin?.name}</h2>
            
            
            
         
         <div></div>

         </div>
      </div>
    </div>
  );
}
