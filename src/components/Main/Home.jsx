import { Link } from "react-router-dom";
import brusketa from "../../assets/images/bruschetta.jpg";
import "./Home.css";
export default function Home() {
  const dishes = [
    {
      name: "Bruschetta",
      description: "Our Bruschetta is made from grilled bread, fresh tomatoes.",
      price: "$10",
      image: brusketa,
    },
    {
      name: "Bruschetta",
      description:
        "Fresh tomatoes, basil, garlic, olive oil, and balsamic vinegar.",
      price: "$10",
      image: brusketa,
    },
    {
      name: "Bruschetta",
      description: "Fresh tomatoes, basil, garlic, olive oil.",
      price: "$10",
      image: brusketa,
    },
  ];

  return (
    <>
      <article className="hero-section">
        <section className="hero-text">
          <h1>Little Lemon</h1>
          <h2>Chicago</h2>
          <p>
            We are a family owned Mediterranean restaurant, focused on
            traditional recipes served with a modern twist.
          </p>
          <Link to="/reservations" className="reserve_button">
            Reserve a Table
          </Link>
        </section>
        <img src={brusketa} alt="" />
      </article>
      <section className="specials">
        <h1>This week specials</h1>
        <div className="specials-container">
          {dishes.map((dish) => {
            return (
              <section className="dish-card">
                <img src={dish.image} alt="" />
                <section className="dish-info">
                  <h2>{dish.name}</h2>
                  <p>{dish.description}</p>
                  <p>{dish.price}</p>
                </section>
              </section>
            );
          })}
        </div>
      </section>
    </>
  );
}
