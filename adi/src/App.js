import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import About from "./Components/About";
import Campaigns from "./Components/Campaigns";
import Testimonies from "./Components/Testimonies";
import Contact from "./Components/Contact";
import Services from "./Components/Services";
import Loading from "./Components/Loading";
import Home from "./Components/Home";
import SharedLayout from "./Components/SharedLayout";

function App({ show, setShow }) {
  const [loading, setLoading] = useState(true);

  return (
    <main className={`bg-[#0a192f]  text-[#facc15] py-5 px-5 md:px-5 relative`}>
      {loading ? (
        <Loading setLoading={setLoading} />
      ) : (
        <BrowserRouter>
          <Routes>
            <Route
              path="/"
              element={<SharedLayout show={show} setShow={setShow} />}
            >
              <Route index element={<Home show={show} />} />
              <Route path="/about" element={<About show={show} />} />
              <Route path="/campaigns" element={<Campaigns show={show} />} />
              <Route path="/contact" element={<Contact show={show} />} />
              <Route path="/services" element={<Services show={show} />} />
              <Route path="/testimonies" element={<Testimonies show={show} />} />
              
            </Route>
          </Routes>
        </BrowserRouter>
      )}
    </main>
  );
}

export default App;
