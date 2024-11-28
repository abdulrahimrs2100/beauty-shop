import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import ProductSlide from "./components/ProductsSlide";
import Blogs from "./components/Blogs";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <ProductSlide />
      <Blogs/>
      <Footer />
    </div>
  );
}

export default App;
