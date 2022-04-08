import { GoogleAuthProvider, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from '../../firebase.init';
import './Login.css';

const googleProvider = new GoogleAuthProvider();
const Login = () => {
    const navigate = useNavigate()
    const [password,setPassword] = useState({value:"",error:""})
    const [email,setEmail] = useState({value:"",error:""})
    const handleEmail = event =>{
        const emailInput = event.target.value;
        setEmail({value:emailInput,error:""})
    }
    const handlePassword = event =>{
        const passwordInput = event.target.value;
        setPassword({value:passwordInput,error:""})
    }
    const submitForm = event =>{
        event.preventDefault();
        if(email.value === ""){
            setEmail({value:"",error:"email required"})
        }
        if(password.value === ""){
            setPassword({value:"",error:"password required"})
        }
        if(email.value && password.value){
            signInWithEmailAndPassword(auth, email.value, password.value)
            .then(result => {
                const user = result.user
                navigate("/")
            })
            .catch(error =>{
                console.error(error);
            })
        }
        else{
            console.log("hello");
        }
        event.preventDefault();
    }
    const hanleGoogleLogIn = () => {
        signInWithPopup(auth, googleProvider)
        .then(result =>{
            const user = result.user
            console.log(user);
            navigate("/")
        })
        .catch(error =>{
            console.error(error);
        })
    }
    const resetPassword = () =>{
        sendPasswordResetEmail(auth, email.value)
        .then(() =>{
            console.log("password email sent");
        })
        .catch(error =>{
            console.error(error);
        })
    }
    return (
        <div>
            <div className='auth-login'>
                <form onSubmit={submitForm} action="#">
                    <div className='input-field'>
                        <label htmlFor="email">Email <br />
                            <input onBlur={handleEmail} type="email" name='email'placeholder='Enter Your Email'/>
                        </label>
                        <div><p className='error'>{email.error}</p></div>
                    </div>
                    <div className='input-field'>
                        <label htmlFor="password">Password <br />
                            <input onBlur={handlePassword} type="password" name='password'placeholder='Enter Your password'/>
                        </label>
                        <div><p className='error'>{password.error}</p></div>
                    </div>
                    <div>
                        <button className='loginbtn'>LogIn</button>
                    </div>
                </form>
                <p className='create-new'>
                    New to tech geeks  {" "} 
                <span onClick={()=> navigate("/signup")}>Create New Account</span>
                </p>
                <a onClick={resetPassword} href="#">reset password</a> <br />
                <button onClick={hanleGoogleLogIn} className='btn-google'>Continue with google</button>
            </div>
        </div>
    );
};

export default Login;