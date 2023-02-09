import "./App.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Navbar from "components/Navbar";
import AddOrEditTour from "pages/AddOrEditTour";
import MainLayout from "layouts/MainLayout";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        {/* <Navbar/> */}
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
          <Route element={<MainLayout/>}>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/add-tour" element={<AddOrEditTour />} />
          <Route path="/tour-tour/:id" element={<AddOrEditTour />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
