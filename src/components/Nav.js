import { Link } from 'react-router-dom';

function Nav() {
    return(
    <nav>
       <img src="/images/logo.png" alt="Little Lemon Logo" className="logo" />
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</=></li>
            <li><Link to="/menu">Menu</=></li>
            <li><Link to="/reservations">Reservations</=></li>
            <li><Link to="/order-online">Order Online</=></li>
            <li><Link to="/login">Login</=></li>
        </ul>
    </nav>
    )
}
export default Nav;