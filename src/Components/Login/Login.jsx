import { GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import auth from "../Firebase/Firebase.init";
import { useState } from "react";

const Login = () => {
    const [user, setUser] = useState(null)
    const provider = new GoogleAuthProvider(); 


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
  return (
    <div >

        {
            user ? <button onClick={handleGoogleLogout}>sign  out</button> : <button onClick={handleGoogleLogin}>sign in with google</button>
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