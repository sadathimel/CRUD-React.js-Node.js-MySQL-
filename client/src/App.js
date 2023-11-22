import * as React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Add from "./pages/Add";
import Books from "./pages/Books";
import Update from "./pages/Update";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Books />} /> {/* 👈 Renders at /app/ */}
          <Route path="/Add" element={<Add />} /> {/* 👈 Renders at /app/ */}
          <Route path="/Update" element={<Update />} />{" "}
          {/* 👈 Renders at /app/ */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
