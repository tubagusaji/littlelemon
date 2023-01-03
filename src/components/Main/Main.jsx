import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Menu from "./Menu";
import Reservations from "./Reservations";
import OrderOnline from "./OrderOnline";
import Login from "./Login";

export default function Main() {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/menu" element={<Menu />} />

        <Route path="/reservations" element={<Reservations />} />

        <Route path="/orderonline" element={<OrderOnline />} />

        <Route path="/login" element={<Login />} />
      </Routes>
    </main>
  );
}
