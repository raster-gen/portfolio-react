import "./App.css";
import About from "./components/about/About";
import Header from "./components/header/Header";
import Nav from "./components/nav/Nav";
import Portfolio from "./components/portfolio/Portfolio";
import Services from "./components/services/Services";
import Experience from "./components/experience/Experience";
import Testimonials from "./components/testimonials/Testimonials";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Nav />
      <About />
      <Experience />
      <Services />
      <Portfolio />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;
