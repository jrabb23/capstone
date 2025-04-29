import { Link } from 'react-router-dom';

function CallToAction() {
  return (
    <section className="hero">
      <div className="text">
        <h1>Little Lemon<br />Chicago</h1>
        <p>We are a family-owned Mediterranean restaurant focused on traditional recipes with a modern twist.</p>
        <Link to="/reservations">
          <button>Reserve a Table</button>
        </Link>
      </div>
      <img src="/images/MarioandAndrianA.jpg" alt="Delicious food" />
    </section>
  );
}

export default CallToAction;
