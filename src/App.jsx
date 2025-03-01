import { Route, Routes } from "react-router-dom";
import "./App.css";
import ProductPage from "./pages/ProductPage/ProductPage";
import Layout from "./components/Layout/Layout";
import HomePage from "./pages/HomePage/HomePage";
import { NotFound } from "./components/NotFound/NotFound";
import PrivateRoute from "./routes/PrivateRoute";
import { useSelector } from "react-redux";
import { Loader } from "./components/Loader/Loader";

function App() {
  const loading = useSelector((state) => state.loading.loading);
  return (
    <>
      {loading && <Loader />}
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />

          <Route
            path="/products"
            element={
              <PrivateRoute>
                <ProductPage />
              </PrivateRoute>
            }
          />
        </Route>
        {/* <Route path="*" element={<Navigate to="/" />} /> */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
