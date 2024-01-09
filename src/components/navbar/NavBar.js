import Logo from "../../assets/images/logo.png";
import { Link } from "react-router-dom";
import './NavBar.css';

const NavBar = () => {
  return (
    <nav className="navbar">
      <a href = "/">
        <img src={Logo} className="app-logo" alt="logo" align="left" />
      </a>

      <div align="right" className="navBar-button-group">
        <Link className="navBar-button" to="home">
          Home
        </Link>
        <Link className="navBar-button" to="team">
          Team
        </Link>
        <Link className="navBar-button" to="research">
          Research
        </Link>
        <Link className="navBar-button" to="publications">
          Publications
        </Link>
      </div>
      <br />
    </nav>
  );
};

export default NavBar;
