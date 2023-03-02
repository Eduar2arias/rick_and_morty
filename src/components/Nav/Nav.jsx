import About from "../About/About";
import SearchBar from "../C search/SearchBar";
import style from '../Nav/Nav.module.css'
import { Link } from "react-router-dom";
import Home from "../Home/Home";

export default function Nav(props) {
  console.log(props);
  return (
    <div className={style.container_nav}>
      <Link className={style.home} to='/home'>
        {/* <Home/> */}
        <h2>Home</h2>
      </Link >
      <Link className={style.about} to='/about'>
        {/* <About/> */}
        <h2>About</h2>
          
      </Link>
      <Link className={style.about} to='/Form'>
        <h2>Form</h2>
      </Link>

      <SearchBar fnSearch ={props.fnSearch}/>
    </div>
  );
}
