import { GoogleAuthProvider, signInWithPopup, signOut, GithubAuthProvider } from "firebase/auth";
import auth from "../Firebase/Firebase.init";
import { useState } from "react";

const Login = () => {
    const [user, setUser] = useState(null)
    const provider = new GoogleAuthProvider(); 
    const gitProvider = new GithubAuthProvider();


    const handleGoogleLogin = () =>{
        signInWithPopup(auth,provider)
        .then((result) => {
            console.log(result.user);
            setUser(result.user);
        })
        .catch(error => {
            console.log("error", error);
        })
    }

    const handleGoogleLogout = ()=> {
        signOut(auth)
        .then(() => {
            console.log("sign out")
            setUser(null)
        })
        .catch(error => {
            console.log(error, "error catched")
        })
    }
    
    const handleSignInWithGithub =()=> {
        signInWithPopup(auth, gitProvider)
        .then(result => {
            setUser(result.user)
        })
        .catch(error => {
            console.log(error, "catch error")
        })
    }
  return (
    <div >

        {
            user ? <button onClick={handleGoogleLogout}>sign  out</button> : 
            <div>
                <button onClick={handleGoogleLogin}>sign in with google</button>
                <button onClick={handleSignInWithGithub}>Sign in with Github</button>
            </div>

        }
        {
            user && <div>
                <h4>User: {user.displayName}</h4>
                <p>mail: {user.email}</p>
                <img src={user.photoURL} alt="" />
            </div>
        }
    
    </div>
  )
}

export default Login