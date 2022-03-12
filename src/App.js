import React from "react";
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Homepage from "./pages/Homepage";
import UserPage from "./pages/UserPage";
import tempItemPage1 from "./pages/tempItemPage1";
import tempItemPage2 from "./pages/tempItemPage2";
import editAddPage from "./pages/editAddPage";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Homepage/>}/>
          <Route path='/UserPage' element={<UserPage/>}/>
          <Route path='/tempItemPage1' element={<tempItemPage1/>}/>
          <Route path='/tempItemPage2' element={<tempItemPage2/>}/>
          <Route path='/addOrEdit' element={<editAddPage/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
