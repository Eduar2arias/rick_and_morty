import { Link } from "react-router-dom";
import style from "../C. card/card.module.css";

export default function Card(props) {
  return (
    <div className={style.container}>
      <div className={style.btn}>
        <button id={props.id} onClick={props.onClose}>
          X
        </button>
      </div>
      <Link className={style.card_link} to={`/detail/${props.id}`}>
      <div className={style.info}>
        <div className={style.imgCard}>
          <img src={props.image} alt="" />
        </div>
        <div className={style.textContent}>
          <h2>Nombre</h2>
          <h2>{props.name}</h2>
          <h2>Genero </h2>
          <h2>{props.gender}</h2>
          <h2>Especie </h2>
          <h2>{props.species}</h2>
        </div>
      </div>
      </Link>
    </div>
  );
}
