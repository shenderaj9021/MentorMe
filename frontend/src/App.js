import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './component/Navbar/Navbar';
import { Routes,Route,BrowserRouter } from 'react-router-dom'
import Signup from './pages/Signup/Signup';
import Login from './pages/Login/Login';
import Home from './pages/Home/Home';
import Aboutus from './pages/Aboutus/Aboutus';
import Profile from './pages/Profile/Profile';
function App() {
  return (
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path='/' element={<Home />}  exact />
      <Route path='/login' element={<Login />} />
      <Route path='/signup' element={<Signup />}></Route>
      <Route path='/Aboutus' element={<Aboutus />}></Route>
      <Route path='/Profile'  element={<Profile />}></Route>
   </Routes>
   </BrowserRouter>
  );
}

export default App;