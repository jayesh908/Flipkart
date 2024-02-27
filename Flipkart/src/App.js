//import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home/Homepage/Home';
import "react-multi-carousel/lib/styles.css";
//import axios from 'axios';
import Electronnic from './Buttonlink/Electronnic';
// import Deals from './Home/Deals';
import Deal from './Buttonlink/Deal';
// import Navv from './Home/Navv';
//  import Footer from './Home/Footer/Footer';
import Fash from './Buttonlink/Fash';
import Nevver from './Buttonlink/Nevver';
// import Laout from './Laout';
import Navv from './Home/Navv';
import Footer from './Home/Footer/Footer';
import Sidebar from './sidebar/Sidebar';
import Admin from './sidebar/Admin';
import User from './sidebar/User';
import View from './components/View';
import Phone from './Home/Phone';
// import ViewProduct from './components/ViewProduct';
function App() {
  return (
    <Router>
      <Navv />
      <Routes>

        <Route path='/' element={<Home />}></Route>       
        <Route path='/electronic' element={<Electronnic />}></Route>
        <Route path='/Phone/:id' element={<View/>}></Route>
        <Route path='/deal' element={<Deal />}></Route>
        <Route path='/Fash' element={<Fash />}></Route>
        <Route path='/Never' element={<Nevver />}></Route>

        {/* <Route path='/product:productId' element={<ViewProduct />}></Route> */}
        <Route path='/side' element={<Sidebar />}>
          <Route path='Admin' element={<Admin />} />
          <Route path='user' element={<User />} />
        </Route>


      </Routes>
      <Footer />
    </Router >




  );
}

export default App;
