import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { app } from '../services/firebase';
import './login.css';

const Login = () => {

    const firebaseAuth = getAuth(app);
    const provider = new GoogleAuthProvider();

    const LoginButton = async () => {
        const response = await signInWithPopup(firebaseAuth, provider)
        console.log(response);
    };
    return (
        <div>
            <button className="login__button" onClick={LoginButton}><i className="fab fa-google"></i>
            Login with Google</button>
        </div>
    )
}

export default Login