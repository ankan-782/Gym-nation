import { useEffect, useState } from 'react';
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged, signInWithEmailAndPassword, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import initializeAuthentication from '../pages/Authentication/Firebase/firebase.init';
// import { useHistory, useLocation } from 'react-router';

// calling the initial authentication as initAuthentication function to run the authentication related firebase code
initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [error, setError] = useState('');

    //for changing route of user after login
    // const location = useLocation();
    // const history = useHistory();
    // const redirect_url = location.state?.form || '/';

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();


    // Sign up
    const processRegistration = (e) => {
        e.preventDefault();
        // setIsLoading(true);
        console.log(email, password);
        if (!/(?=.*[A-Z])(?=.*[0-9])(?=.*[a-z]).{8}/.test(password)) {
            setError('Password should be at least of 8 characters and must have one uppercase letter, one digits, one lowercase letter');
            return;
        }
        return createUserWithEmailAndPassword(auth, email, password)
        // .then(result => {
        //     setUser(result.user);
        //     console.log(result.user);
        //     history.push(redirect_url);
        //     setError('');
        //     setUserDetails();
        // })
        // .catch(error => {
        //     setError(error.message);
        // })
        // .finally(() => setIsLoading(false));
    }

    // Sign in
    const processLogin = (e) => {
        e.preventDefault();
        // setIsLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
        // .then(result => {
        //     setUser(result.user);
        //     history.push(redirect_url);
        //     setError("");
        // })
        // .catch((error) => {
        //     setError(error.message);
        // })
        // .finally(() => setIsLoading(false));
    }

    const setUserDetails = () => {
        updateProfile(auth.currentUser, { displayName: name })
            .then(result => {

            })
            .catch(error => {
                setError(error.message);
            })
    }


    // google sign in
    const signInUsingGoogle = () => {
        return signInWithPopup(auth, googleProvider)
    }

    
    // observe whether user auth state changed or not
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            }
            else {
                setUser({});
            }
            setIsLoading(false);
        });
    }, []);


    //log out functionality
    const logOut = () => {
        setIsLoading(true);
        signOut(auth)
            .then(() => {
                setUser({});
            })
            .finally(() => setIsLoading(false));
    }


    return {
        user,
        error,
        isLoading,
        signInUsingGoogle,
        processRegistration,
        processLogin,
        logOut,
        setEmail,
        setPassword,
        setName,
        setError,
        setUser,
        setUserDetails,
        setIsLoading
    }
};

export default useFirebase;