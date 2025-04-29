import CallToAction from './CallToAction.js';
import Specials from './Specials.js';
import CustomersSay from './CustomersSay.js';
import Chicago from './Chicago.js';
import Nav from './Nav.js';
import Footer from './Footer.js';

function Homepage() {
  return (
    <>
      <Nav />
      <CallToAction />
      <Specials />
      <CustomersSay />
      <Chicago />
      <Footer />
    </>
  );
}

export default Homepage;
