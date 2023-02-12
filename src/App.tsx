import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Navbar } from "./components";
import { Home, Planet } from "./pages";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/planet/:id" element={<Planet />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
