import React from "react";
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Homepage from "./pages/Homepage";
import UserPage from "./pages/UserPage";
import TempItemPage1 from "./pages/tempItemPage/tempItemPage1";
import TempItemPage2 from "./pages/tempItemPage/tempItemPage2";
import EditAddPage from "./pages/editAddPage/editAddPage";
import LoginPage from "./pages/loginpage/loginpage";
import RegisterPage from "./pages/registerpage/registerpage";
import CartPage from "./pages/cartpage/cartpage";
import CheckoutPage from "./pages/CheckoutPage/CheckoutPage";
import ItemStatusPage1 from "./pages/ItemStatusPage/ItemStatusPage1";
import ItemStatusPage2 from "./pages/ItemStatusPage/ItemStatusPage2";
import ItemStatusPage3 from "./pages/ItemStatusPage/ItemStatusPage3";

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
          <Route path='/login' element={<LoginPage/>}/>
          <Route path='/register' element={<RegisterPage/>}/>
          <Route path='/cart' element={<CartPage/>}/>
          <Route path='/checkout' element={<CheckoutPage/>}/>
          <Route path='/ItemStatus1' element={<ItemStatusPage1/>}/>
          <Route path='/ItemStatus2' element={<ItemStatusPage2/>}/>
          <Route path='/ItemStatus3' element={<ItemStatusPage3/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
