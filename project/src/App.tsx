import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


import Home from "./pages/Home";


function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        {/* Header always visible */}
        

        {/* Page Content */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            
          </Routes>
        </main>

   
      </div>
    </Router>
  );
}

export default App;
