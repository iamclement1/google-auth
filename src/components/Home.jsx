import { auth } from '../services/firebase'

const Home = ({user}) => {
    
    return (
        <div className='home'>
            
            <h1>Hello { user.displayName} </h1>
            <img src={user.photoURL} alt="profile__image" />
            <button className='button signout' onClick={() => auth.signOut()}>
                Sign Out
            </button>
        </div>
    )
}

export default Home