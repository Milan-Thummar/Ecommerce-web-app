import "./App.css";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Product from "./pages/Product";
import Register from "./pages/Register";
import ProductList from "./pages/ProductList";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate,
} from "react-router-dom";
import Success from "./pages/Success";
import { useSelector } from "react-redux";

function App() {
    const user = useSelector((state) => state.user.currentUser);
    return (
        <div className="App">
            <Router>
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route
                        exact
                        path="/products/:category"
                        element={<ProductList />}
                    />
                    <Route exact path="/product/:id" element={<Product />} />
                    <Route
                        exact
                        path="/register"
                        element={user ? <Navigate to="/" /> : <Register />}
                    />
                    <Route
                        exact
                        path="/login"
                        element={user ? <Navigate to="/" /> : <Login />}
                    />
                    <Route exact path="/cart" element={<Cart />} />
                    <Route exact path="/success" element={<Success />} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;
