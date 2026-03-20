import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav style={{ display:"flex", gap:"20px", padding:"16px 40px", background:"#fff" }}>
      <Link to="/">Home</Link>
      <Link to="/reservations">Reservations</Link>
      <Link to="/menu">Menu</Link>
      <Link to="/about">About</Link>
      <Link to="/login">Login</Link>
    </nav>
  );
}
export default Nav;