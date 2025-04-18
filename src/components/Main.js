function Main() {
    return (
        <main>
      <section className="specials">
        <h2>This Week’s Specials!</h2>
        <button className="menu-btn">Online Menu</button>
        <div className="cards">
          {/* Card 1 */}
          <div className="card">
            <img src="/images/greek-salad.jpg" alt="Greek Salad" />
            <h3>Greek Salad</h3>
            <p className="price">$12.99</p>
            <p>Refreshing salad with crispy lettuce, tomatoes, olives, and feta cheese.</p>
            <button>Order Delivery</button>
          </div>
          {/* Card 2 */}
          <div className="card">
            <img src="/images/bruschetta.jpg" alt="Bruschetta" />
            <h3>Bruschetta</h3>
            <p className="price">$5.99</p>
            <p>Grilled bread with garlic, tomatoes, and olive oil.</p>
            <button>Order Delivery</button>
          </div>
          {/* Card 3 */}
          <div className="card">
            <img src="/images/dessert.jpg" alt="Lemon Dessert" />
            <h3>Lemon Dessert</h3>
            <p className="price">$4.99</p>
            <p>Delicious lemon-based dessert, sweet and tangy.</p>
            <button>Order Delivery</button>
          </div>
        </div>
      </section>

      <section className="testimonials">
        <h3>Testimonials</h3>
        <div className="grid">
          <div className="testimonial">
            <p>⭐️⭐️⭐️⭐️⭐️</p>
            <p>“Absolutely amazing!”</p>
            <small>- Nora</small>
          </div>
          <div className="testimonial">
            <p>⭐️⭐️⭐️⭐️</p>
            <p>“Loved the food and the vibe.”</p>
            <small>- Sam</small>
          </div>
          <div className="testimonial">
            <p>⭐️⭐️⭐️⭐️⭐️</p>
            <p>“Best Mediterranean spot in town.”</p>
            <small>- Alex</small>
          </div>
        </div>
      </section>

      <section className="about">
        <div className="text">
          <h2>Little Lemon<br />Chicago</h2>
          <p>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
            Velit officia consequat duis enim velit mollit.
          </p>
        </div>
        <div className="images">
          <img src="/images/about-1.jpg" alt="Inside restaurant" />
          <img src="/images/about-2.jpg" alt="Chef preparing food" />
        </div>
      </section>
    </main>
  );
}

export default Main;