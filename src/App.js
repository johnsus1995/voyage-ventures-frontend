import "./App.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import AddOrEditTour from "pages/AddOrEditTour";
import MainLayout from "layouts/MainLayout";
import Tour from "pages/Tour";
import Dashboard from "pages/Dashboard";
import PrivateRoute from "router/PrivateRoute";
import NotFound from "pages/NotFound";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <ToastContainer
          position="top-right"
          autoClose={2000}
          hideProgressBar
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
        />
        <Routes>
          <Route element={<MainLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="" element={<PrivateRoute/>}>
              <Route path="/add-tour" element={<AddOrEditTour />} />
              <Route path="/update/:id" element={<AddOrEditTour />} />
              <Route path="/tour/:id" element={<Tour />} />
              <Route path="/dashboard" element={<Dashboard />} />
            </Route>
            <Route path="*" element={<NotFound />} />
            
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
