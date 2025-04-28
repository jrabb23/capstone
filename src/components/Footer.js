function Footer () {
    return(
        <footer>
            <div className="column">
        <img src="/images/logo.png" alt="Little Lemon logo" />
      </div>
            <nav className="column">
                <h4>Pages</h4>
                <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/menu">Menu</a></li>
                <li><a href="/reservations">Reservations</a></li>
                <li><a href="/order-online">Order Online</a></li>
                <li><a href="/login">Login</a></li>
                </ul>
            </nav>
            <div className="column">
                <h4>Contact</h4>
                <ul>
                    <li>51 w 21st ave, Chicago IL</li>
                    <li>(303)666-6666</li>
                    <li>LittleLemon@mediachomp.com</li>
                </ul>
            </div>
            <div className="column">
        <h4>Social Media Links</h4>
        <ul>
          <li>Facebook</li>
          <li>Instagram</li>
          <li>Twitter</li>
        </ul>
      </div>
        </footer>
    )
}
export default Footer;