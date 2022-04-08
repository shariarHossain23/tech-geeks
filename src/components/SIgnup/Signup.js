import {
    createUserWithEmailAndPassword,
    GoogleAuthProvider,
    sendEmailVerification,
    signInWithPopup
} from "firebase/auth";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { auth } from "../../firebase.init";

const googleProvider = new GoogleAuthProvider();

const Signup = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState({ value: "", error: "" });
  const [password, setPassword] = useState({ value: "", error: "" });
  const [confirmPassword, setConfirmpassword] = useState({
    value: "",
    error: "",
  });

  const hanleGoogleLogIn = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const user = result.user;
        navigate("/");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleEmail = (event) => {
    const emailValue = event.target.value;
    setEmail({ value: emailValue, error: "" });
  };
  const handlePassword = (event) => {
    const passwordlValue = event.target.value;
    if(passwordlValue.length < 7){
        setPassword({ value:"", error: "password too short" });
    }
    else{
        setPassword({ value:passwordlValue, error: "" });
    }
  };
  const handleConfirmpassword = (event) => {
    const confirm = event.target.value;
    if(confirm !== password.value ){
        setConfirmpassword({value:"",error:"dont match password"})
    }
    else{
        setConfirmpassword({value:confirm,errorL:""})
    }
  };
  const formSubmit = (event) => {
      event.preventDefault()
    if (email.value === "") {
      setEmail({ value: "", error: "email is required" });
    }
    console.log(email.error);
    if (password.value === "") {
      setPassword({ value: "", error: "password is required" });
    }
    if (confirmPassword.value === "") {
      setConfirmpassword({ value: "", error: "confirm password required" });
    }
    if ( password.value === confirmPassword.value) {
      createUserWithEmailAndPassword(auth, email.value, password.value)
        .then((result) => {
          const user = result.user;
          toast.success("Account created",{id:"create"})
          navigate("/")
        })
        .catch((error) => {
            const errorMessage  = error.message;
            if(errorMessage.includes("already-in-use")){
                toast.error("already use")
            }
            else{
                toast.error(errorMessage)
            }
          console.error(error);
        });
        
    }
    else{
       console.log("hello");
    }

    event.preventDefault();
    emailVerification()
  };

  const emailVerification = () =>{
    sendEmailVerification(auth.currentUser)
    .then(() => {
        console.log("verification sent");
    });
  
  }
  return (
    <div>
      <div className="auth-login">
        <form onSubmit={formSubmit} action="#">
          <div className="input-field">
            <label htmlFor="email">
              Email <br />
              <input
                onBlur={handleEmail}
                type="email"
                name="email"
                placeholder="Enter Your Email"
              />
               <p className="error">{email.error}</p>
            </label>
          </div>
          <div className="input-field">
            <label htmlFor="password">
              Password <br />
              <input
                onBlur={handlePassword}
                type="password"
                name="password"
                placeholder="Enter Your password"
              />
            </label>
            <p className="error">{password.error}</p>
          </div>
          <div className="input-field">
            <label htmlFor="password">
              Confirm password <br />
              <input
                onBlur={handleConfirmpassword}
                type="password"
                name="password"
                placeholder="Enter Your password"
              />
            </label>
          </div>
          <div><p className="error">{confirmPassword.error}</p></div>
          <div>
            <button className="loginbtn">Signup</button>
          </div>
        </form>
        <p className="create-new">
          Already Have a Account{" "}
          <span onClick={() => navigate("/login")}>signin</span>
        </p>
        <button onClick={hanleGoogleLogIn} className="btn-google">
          Continue with google
        </button>
      </div>
    </div>
  );
};

export default Signup;
