import React, { useEffect } from "react";
import Login from "./pages/Login";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import AuthProvider from "./Context/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute";
import Home from "./pages/Home";
import Layout from "./layout/Layout";
import Accessories from "./components/Accessories";
import HomeAppliances from "./components/HomeAppliances";
import Mobiles from "./components/Mobiles";
import Watches from "./components/Watches";
import Cart from "./pages/Cart";
import ProductsProvider from "./Context/ProductsContext";
import ProductDetails from "./components/ProductDetails";

function App() {
  return (
    <AuthProvider>
      <ProductsProvider>
        <Router>
          <ScrollToTop />
          <Routes>
            <Route index path="/" element={<Login />} />
            <Route element={<Layout />}>
              <Route
                path="/home"
                element={
                  <ProtectedRoute>
                    <Home />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/accessories"
                element={
                  <ProtectedRoute>
                    <Accessories />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/homeappliances"
                element={
                  <ProtectedRoute>
                    <HomeAppliances />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/mobiles"
                element={
                  <ProtectedRoute>
                    <Mobiles />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/watches"
                element={
                  <ProtectedRoute>
                    <Watches />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/cart"
                element={
                  <ProtectedRoute>
                    <Cart />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/product-details/:id"
                element={
                  <ProtectedRoute>
                    <ProductDetails />
                  </ProtectedRoute>
                }
              />
            </Route>
          </Routes>
        </Router>
      </ProductsProvider>
    </AuthProvider>
  );
}

function ScrollToTop() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return null;
}
export default App;
