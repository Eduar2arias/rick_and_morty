import { useLocation } from "react-router-dom";
import styled from "./Form.module.css";

export default function Form() {
  const location = useLocation();
  console.log(location);
  return (
    <div className={styled.container}>
      
        <div>
          <label htmlFor="email">Email</label>
          <input type="text" name="email" />
        </div>
        <br />
        <div>
          <label htmlFor="password">Contraseña</label>
          <input type="password" name="password" />
        </div>
        <br />
        <button type="submit">Iniciar Sesion</button>
      
    </div>
  );
}
