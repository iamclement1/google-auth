import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { app } from '../services/firebase';
import './login.css';
import { useStateValue } from '../context/StateProvider';
import { actionType } from '../context/reducer';

const Login = () => {

    const firebaseAuth = getAuth(app);
    const provider = new GoogleAuthProvider();

    const [ { user } , dispatch ] = useStateValue();
    const LoginButton = async () => {
        const { user : { refreshToken, providerData}} = await signInWithPopup(firebaseAuth, provider);
        //dispatch the data 

        dispatch({
            type: actionType.SET_USER, //setting the action type from the reducer hook so we call the action type object
            user : providerData[0]
        })
    }


    return (
        <div>
            <button className="login__button" onClick={LoginButton}><i className="fab fa-google"></i>
            {/* here we check if a user is logged in the "login with Google" button should display otherwise display the 'user name' found in the Google account */}
                {
                    user ? user.displayName : 'Login with Google'
                }
            </button>
        </div>
    )
}

export default Login