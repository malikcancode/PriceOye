import React, { useEffect, Suspense, lazy } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import AuthProvider from "./Context/AuthContext";
import ProductsProvider from "./Context/ProductsContext";
import ProtectedRoute from "./components/ProtectedRoute";
import Loading from "./pages/Loading";

// Lazy-loaded pages/components
const Login = lazy(() => import("./pages/Login"));
const Home = lazy(() => import("./pages/Home"));
const Accessories = lazy(() => import("./components/Accessories"));
const HomeAppliances = lazy(() => import("./components/HomeAppliances"));
const Mobiles = lazy(() => import("./components/Mobiles"));
const Watches = lazy(() => import("./components/Watches"));
const Cart = lazy(() => import("./pages/Cart"));
const ProductDetails = lazy(() => import("./components/ProductDetails"));
const Layout = lazy(() => import("./layout/Layout"));

function App() {
  return (
    <AuthProvider>
      <ProductsProvider>
        <Router>
          <ScrollToTop />
          <Suspense
            fallback={
              <div>
                <Loading />
              </div>
            }
          >
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
          </Suspense>
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
