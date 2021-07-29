import { Link } from "react-router-dom"

const Nav = () => {
	return(
	<nav className="route">
      <span><Link to="/home" className="link" > Home </Link> </span>&nbsp;
      <span><Link to="/about" className="link" > About </Link> </span>&nbsp;
      <span><Link to="/profile" className="link" > Profile </Link> </span>&nbsp;
      <span><Link to="/dashboard" className="link" > Dashboard </Link> </span>&nbsp;
     </nav>
		);
}
export default Nav;