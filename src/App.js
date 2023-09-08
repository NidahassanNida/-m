import "./App.css";
// import Navbar from './componenet/Navbar';
// import Home from './componenet/Home';
// import Number from './componenet/Number';
import Section1 from './componenet/Section1';
// import Section2 from './componenet/Section2';
// import Section3 from './componenet/Section3';
import Menu from './componenet/Menu';
import Testimonal from './componenet/Testimonal';
import Faq from './componenet/Faq';
import Homescreen from "./screens/Homescreen";

import Signin from "./screens/Signin";
import Login from "./screens/Login";
import { CartProvider } from './componenet/ContextReducer';

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import MyOrder from "./screens/MyOrder";

function App() {
  return (
    <CartProvider>
        <Router>
          <Routes>
            <Route exact path="/" element={<Homescreen/>}/>
            <Route exact path="/homescreen" element={<Homescreen/>}/>
            <Route exact path="/about" element={<Section1/>}/>
            <Route exact path="/review" element={<Testimonal/>}/>
            <Route exact path="/menu" element={<Menu/>}/>
            <Route exact path="/faq" element={<Faq/>}/>
            <Route exact path="/myorder" element={<MyOrder/>}/>
            <Route exact path="/login" element={<Login/>}/>
            <Route exact path="/signin" element={<Signin/>}/>
          </Routes>
        </Router>
  </CartProvider>
  );
}

export default App;
