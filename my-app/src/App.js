import Home from "./pages/Home";
import Product from "./pages/Product";
import ProductList from "./pages/ProductList";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Cart from "./pages/Cart"
import Success from "./pages/Success"
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import { useSelector } from "react-redux";



const App = () => {
  const user = useSelector((state) => state.user.currentUser);
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/login" element={user ? <Home/> : <Login/>} />
        <Route exact path="/register" element={user ? <Home/> : <Register/>} />
        <Route exact path="/cart" element={<Cart/>} />
        <Route exact path="/success" element={<Success/>} />
        <Route exact path="/products/:category" element={<ProductList/>} />
        <Route exact path="/product/:id" element={<Product/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
