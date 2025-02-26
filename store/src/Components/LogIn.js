import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Sign.css";
import { auth, app } from "../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const LogIn = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate=useNavigate();
  

  const signIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    console.log(userCredential);
     navigate('/shop');
    // console.log("Sign-in successful");
  })
  .catch((error) => {
    console.log(error);
    navigate('/error');
  });

  }
    return (
      <><div className="rule"><h3><i>За купување на автобуска карта, прво мора да се најавите.</i></h3></div>
      <div className="container-signin">
        <section className="wrapper">
          <div className="heading">
            <h1 className="text text-large"><strong>Најавете се</strong></h1>
          </div>
          <form onSubmit={signIn}>
            <div className="intput-control">
              <input type="email" placeholder="Внесете го вашиот е-маил" value={email} onChange={(e) => setEmail(e.target.value)} className="input-field"></input>
            </div>
            <div class="input-control">
              <input type="password" placeholder="Внесете ја вашата лозинка" value={password} onChange={(e) => setPassword(e.target.value)} className="input-field"></input>
            </div>
            <button type="submit" name="submit" className="input-submit" value="Потврди">Потврди</button>
          </form>
          <div>
            <p class="text text-normal">Нов корисник? <span>
              <Link to='/signup' className="text text-links">Регистрирајте се</Link></span>
            </p>
          </div>
        </section>
      </div></>
    )
}
export default LogIn;