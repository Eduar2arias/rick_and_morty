import { useState } from "react";
import { useRef } from "react";
import style from '../C search/SearchBar.module.css'

export default function SearchBar(props) {
   const refInput = useRef()

    console.log(props);
    
    const [nombre,setNombre] = useState('')
   // const capturarInput = function (){
      let handlerchange = (e) =>{
         let dato = parseInt(e.target.value)
         
         setNombre(dato)
       
         
      }
   //    return refInput.current.value
   // }
   return (
      <div className={style.container}>
         <input ref={refInput} type='search' 
            onChange = {handlerchange}
         />
      <button
       onClick={()=> {
         props.fnSearch(nombre)
         refInput.current.value = ""
      }}
       
       >Agregar
       </button>
      
      </div>
   );
}
