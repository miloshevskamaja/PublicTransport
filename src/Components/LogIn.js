
import React from "react";

const Login = () => {
    return (
       <div className="container-signin">
        <section class="wrapper">
            <div class="heading">
                <h1 class="text text-large"><strong>Sign In</strong></h1>
                <p class="text text-normal">New user? <span><a href="/signup" class="text text-links">Create an accaunt</a></span>
                </p>
            </div>
            <form>
                <div class="intput-control">
                    <input
                    type="email" placeholder="Enter your email" class="intput-field">
                    </input>

                </div>
                <div class="intput-control">
                    <intput
                    type="password" placeholder="Enter your password" class="intput-field">
                    </intput>
                </div>

                <button type="submit" name="sumbit" class="input-submit" value="Sign In">Sign In</button>
            </form>
        </section>
       </div>
    )
}
export default Login;