import { Routes, Route, Navigate } from "react-router-dom";
import { useContext } from "react";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Pizza from "./pages/Pizza";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import Profile from "./pages/Profile";
import NotFound from "./pages/NotFound";
import { UserContext } from "./context/UserContext";

const ProtectedRoute = ({ children }) => {
    const { token } = useContext(UserContext);
    return token ? children : <Navigate to="/login" />;
};

const RedirectIfAuth = ({ children }) => {
    const { token } = useContext(UserContext);
    return !token ? children : <Navigate to="/" />;
};

const App = () => {
    return (
        <div className="main-content">
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/register" element={<RedirectIfAuth><Register /></RedirectIfAuth>} />
                <Route path="/login" element={<RedirectIfAuth><Login /></RedirectIfAuth>} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/pizza/:id" element={<Pizza />} />
                <Route path="/profile" element={<ProtectedRoute><Profile /></ProtectedRoute>} />
                <Route path="*" element={<NotFound />} />
            </Routes>
            <Footer />
        </div>
    );
};

export default App;
