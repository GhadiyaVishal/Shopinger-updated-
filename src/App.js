import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Login from "./pages/Login/Login";
import Register from "./pages/Login/Register";
import Homepage from "./AppPages/Homepage";
import ProductList from "./AppPages/ProductList";
import Product from "./AppPages/Product";
import Cart from "./AppPages/Cart";
import Header from "./AppPages/Header";
import Footer from "./component/Footer";
import { useSelector } from "react-redux";

function App() {
  // const user = true;
  const user = useSelector(state => state.user.currentUser);
  return (
    <>
      <BrowserRouter>
        <Header />

        <Routes>
          <Route exact path="/" element={<Homepage />}></Route>
          <Route
            path="/productlist/:category"
            element={<ProductList />}
          ></Route>
          <Route path="/product/:id" element={<Product />}></Route>
          <Route exact path="/cart" element={<Cart />}></Route>
          <Route
            path="/login"
            element={user ? <Navigate to="/" /> : <Login />}
          ></Route>
          {/* <Route path="/login">{user ? <Navigate to="/" /> : <Login />}</Route> */}
          {/* <Route path="/register">
            {user ? <Navigate to="/" /> : <Register />}
          </Route> */}
          <Route
            path="/register"
            element={user ? <Navigate to="/" /> : <Register />}
          ></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
// element={<Login />}
// element={<Register />}
