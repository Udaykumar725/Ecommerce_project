import { Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import "./App.css";
import CartScreen from "./screen/CartScreen";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HomeScreen from "./screen/HomeScreen";
import ProductDetail from "./screen/ProductDetail";
import LoginScreen from "./screen/LoginScreen";
import RegisterScreen from './screen/RegisterScreen'

function App() {
  return (
    <>
      <Header />
      <main className="my-3">
        <Container>
          <Routes>
            <Route exact path="/" element={<HomeScreen />} />
            <Route path="/login" element={<LoginScreen />} />
            <Route path="/register" element={<RegisterScreen />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/cart/:id" element={<CartScreen />} />
          </Routes>
        </Container>
      </main>

      <Footer />
    </>
  );
}

export default App;
