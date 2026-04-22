import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "./App.css";
import Dashboard from "./pages/Dashboard";
import Login from "./components/Login";
import Register from "./components/Register";
import Poems from "./pages/Poems";
import Shayari from "./pages/Shayari";
import UploadQuote from "./pages/UploadQuote";
import NotFound from "./pages/NotFound";
import Quotes from "./pages/Quotes";
import DashboardContent from "./pages/Home";
import SearchResults from "./pages/SearchResults";
import AllWritings from "./pages/AllWritings";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Chatbot from "./pages/Chatbot";

function App() {
  return (
    <BrowserRouter>
      
      
      <ToastContainer
        toastClassName="bg-yellow-400 text-gray-900"
        bodyClassName="font-medium"
        position="top-right"
        autoClose={2000}
      />
      <Chatbot />
       
      <Routes>
        <Route path="/" element={<Dashboard />}>
          <Route index element={<Home />} />
          <Route path="quotes" element={<Quotes />} />
          <Route path="poems" element={<Poems />} />
          <Route path="shayari" element={<Shayari />} />
          <Route path="upload-quote" element={<UploadQuote />} />
          <Route path="all-writings" element={<AllWritings />} />
          <Route path="search" element={<SearchResults />} />
          <Route path="about" element={<AboutUs />} />
        </Route>

        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
