import Test from "./Test";
import "./app.scss"
import Hero from "./components/Hero/Hero";
import Navbar from './components/navbar/navbar'
import Services from "./components/services/Services";
import Parallax from "./components/parallax/Parallax";
import Portfolio from "./components/portfolio/Portfolio";
import Contact from "./components/contact/Contact";
import Cursor from "./components/cursor/Cursor";
const App = () => {
  return <div>
    <Cursor />
    <section id="Homepage">
      <Navbar />
      <Hero />
    </section>
    <section id="Services">
      <Parallax type="services" /></section>
    <section><Services /></section>
    <section id="Portfolio">
    <Parallax type="portfolio" />
    </section>
    <Portfolio />
    <section id="Contact">
      <Contact/>
    </section>
    {/* <Test /> */}
    
    </div>;
};

export default App;
