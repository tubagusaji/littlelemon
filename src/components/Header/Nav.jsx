import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <nav>
      <Link to="/">Home</Link>

      <Link to="/about">About</Link>

      {/* <Link to="/menu">Menu</Link> */}

      <Link to="/reservations">Reservations</Link>

      {/* <Link to="/orderonline">OrderOnline</Link> */}

      {/* <Link to="/login">Login</Link> */}
    </nav>
  );
}
