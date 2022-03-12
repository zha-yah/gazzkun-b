import React from "react";
import Homepage from "./pages/Homepage";
import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';
import SellerPage from "./pages/UserPage";

function App() {
  return (
    <>
      <Router>
      <Routes>
        <Route path='/' element={<Homepage/>}/>
        <Route path='/UserPage' element={<SellerPage/>}/>
      </Routes>
      </Router>
    </>
  );
}

export default App;
