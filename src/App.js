import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './Pages/Shared/Footer/Footer';
import Header from './Pages/Shared/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home/Home';
import About from './Pages/About/About';
import ServiceDeatail from './Pages/Home/ServiceDetail/ServiceDeatail';
import RequireAuth from './Pages/LogIn/RequireAuth/RequireAuth';
import CheckOut from './Pages/CheckOut/CheckOut';
import Login from './Pages/LogIn/Login/Login';
import Register from './Pages/LogIn/Register/Register';
import NotFound from './Pages/NotFound/NotFound';
import Blog from './Pages/Blogs/Blog';
import ThankYou from './Pages/ThankYou/ThankYou';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/blog' element={<Blog></Blog>}></Route>

        <Route path='/service/:serviceId' element={<ServiceDeatail></ServiceDeatail>}></Route>
        <Route path="/checkout" element={
          <RequireAuth>
            <CheckOut></CheckOut>
          </RequireAuth>
        }></Route>
        <Route path='/thankyou' element={<ThankYou></ThankYou>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>

      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
