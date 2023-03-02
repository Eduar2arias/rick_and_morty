import Card from "../C. card/Card.jsx";
import style from "../C cards/Cards.module.css";
import { Link } from "react-router-dom";

export default function Cards(props) {
  const { characters } = props;
  console.log(props);
  return (
    <div className={style.container}>
      {characters.map((e, i) => (
        
        <Card
         id = {e.id}
          key={i}
          name={e.name}
          species={e.species}
          gender={e.gender}
          image={e.image}
          onClose={props.fnClose}
        />
       
      ))}
    </div>
  );
}
