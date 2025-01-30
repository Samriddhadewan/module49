import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import auth from "../Firebase/Firebase.init";

const Login = () => {
    const provider = new GoogleAuthProvider(); 


    const handleGoogleLogin = () =>{
        signInWithPopup(auth,provider)
        .then((result) => {
            console.log(result)
        })
        .catch(error => {
            console.log("error", error);
        })
    }
  return (
    <div >
        <button onClick={handleGoogleLogin}>sign in with google</button>
    </div>
  )
}

export default Login