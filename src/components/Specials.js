function Specials() {
    return (
      <section className="specials">
        <h2>This Week’s Specials!</h2>
        <button className="menu-btn">Online Menu</button>
        <div className="cards">
          <div className="card">
            <img src="/images/greek-salad.jpg" alt="Greek Salad" />
            <h3>Greek Salad</h3>
            <p className="price">$12.99</p>
            <p>Refreshing salad with lettuce, tomatoes, olives, and feta cheese.</p>
          </div>
          <div className="card">
            <img src="/images/bruschetta.jpg" alt="Bruschetta" />
            <h3>Bruschetta</h3>
            <p className="price">$5.99</p>
            <p>Grilled bread topped with garlic, tomatoes, and olive oil.</p>
          </div>
          <div className="card">
            <img src="/images/dessert.jpg" alt="Lemon Dessert" />
            <h3>Lemon Dessert</h3>
            <p className="price">$4.99</p>
            <p>Sweet and tangy lemon-based dessert. A fan favorite!</p>
          </div>
        </div>
      </section>
    );
  }

  export default Specials;
