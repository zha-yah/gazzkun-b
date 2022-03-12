import React from "react";
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Homepage from "./pages/Homepage";
import UserPage from "./pages/UserPage";
import TempItemPage1 from "./pages/tempItemPage1";
import TempItemPage2 from "./pages/tempItemPage2";
import EditAddPage from "./pages/editAddPage";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Homepage/>}/>
          <Route path='/UserPage' element={<UserPage/>}/>
          <Route path='/tempItemPage1' element={<TempItemPage1/>}/>
          <Route path='/tempItemPage2' element={<TempItemPage2/>}/>
          <Route path='/addOrEdit' element={<EditAddPage/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
