//import "./App.css";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import SignUp from "./Components/SignUp"
import SecondPage from "./Components/SecondPage"
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Login from "./Components/LogIn";
import Shop from "./Components/Tickets/shop";
import Error from "./Components/error";
import Success from "./Components/success";


const App =() =>{
  return (
    <>
    <Router>
    <Navbar />
      <Routes>
        <Route path='/' element ={<Home />} />
        <Route path='/login' element ={<Login />} />
        <Route path='/secondpage' element ={<SecondPage />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/shop' element={<Shop />} />
        <Route path='/error' element={<Error />} />
        <Route path='/success' element={<Success />}/>
      </Routes>
    </Router>
    
    
    </>
  )

}
export default App;


