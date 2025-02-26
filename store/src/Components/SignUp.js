import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Sign.css";
import { auth, app } from "../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const SignUp = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate=useNavigate('');

  const signUp = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    console.log(userCredential); 
   // console.log("Sign-in successful");
    navigate('/login')
  })
  .catch((error) => {
    console.log(error);
  });

  }
    return (
      
      <div className="container-signin">
        <section className="wrapper">
        <div className="heading">
            <h1 className="text text-large"><strong>Регистрирајте се</strong></h1>
        </div>
        <form onSubmit={signUp}>
          <div className="input-control">
            <input type="name" placeholder="Внесете го вашето име и презиме" className="input-field"></input>
          </div>
          <div className="input-control">
            <input type="email" placeholder="Внесете го вашиот е-маил" value={email} onChange={(e)=>setEmail(e.target.value)} className="input-field"></input>
          </div>
          <div class="input-control">
            <input type="password" placeholder="Внесете ја вашата лозинка" value={password} onChange={(e)=>setPassword(e.target.value)} className="input-field"></input>
          </div>
          <button type="submit" name="submit" className="input-submit" value="Sign In">Потврди</button>
        </form>
        <div>
            <p class="text text-normal">Имате профил? <span>
              <Link to='/login' className="text text-links">Најавете се</Link></span>
               </p>
          </div>
        </section>
      </div>
    
    )
}
export default SignUp;