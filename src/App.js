import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
// import Card from "./components/C. card/Card.jsx";
import Cards from "./components//C cards/Cards.jsx";
import About from "./components/About/About";
import HeroImage from "./components/component hero img/HeroImage.jsx";
import Detail from "./components/Detail/Detail";
import Form from "./components/Form/Form";

// import characters, { Rick } from "./data.js";
import Nav from "./components/Nav/Nav";

function App() {
  const [characters, setCharacters] = useState([]);


  function onSearch(character) {
    fetch(`https://rickandmortyapi.com/api/character/${character}`)
      .then((response) => response.json())
      .then((data) => {

        if (data.name) {
            const validatePerson = characters.find( character => character.id === data.id);

            console.log(!validatePerson);
            if(!validatePerson){
              setCharacters([...characters, data]);
            } else{

              window.alert("Ya hay personajes con ese ID");
            }
          
        } else {
          window.alert("No hay personajes con ese ID");
        }
      });
  }

  let onClose = (e) => {

    let newArr = characters.filter((el) => el.id !== parseInt(e.target.id));
    setCharacters([...newArr]);
  };

  return (
    <div className="App">
      <header>
        <Routes>
          <Route path="/home" element={<HeroImage />} />
        </Routes>
      </header>
      <div className="container-search">
        <Nav fnSearch={onSearch} />
      </div>

      <Routes>
        {/* <Route path="/" element={<Nav fnSearch={onSearch} />}/> */}

        <Route path="/about" element={<About />} />
        <Route
          path="/home"
          element={<Cards characters={characters} fnClose={onClose} />}
        ></Route>
        <Route
          exact path="/detail/:detailId"
          element={<Detail characters={characters} />}
        />
        <Route path="/Form" element={<Form />} />
      </Routes>
    </div>
  );
}

export default App;
