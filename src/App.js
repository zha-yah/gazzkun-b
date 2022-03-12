import React from "react";
import Homepage from "./pages/Homepage";
import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';
import SellerPage from "./pages/SellerPage";

function App() {
  return (
    <>
      <Router>
      <Homepage />
      <Routes>
        <Route path='/' element={<Homepage/>}/>
        <Route path='/SellerPage' element={<SellerPage/>}/>
      </Routes>
      </Router>
    </>
  );
}

export default App;
