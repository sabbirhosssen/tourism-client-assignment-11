import { useEffect, useState } from "react"
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";
import initializeAuthentication from "../Firebases/firebase.init";
// import { useHistory } from "react-router";


initializeAuthentication();
const useFirebase = () => {
    // let history = useHistory();
    // let location = useLocation();
    const [user, setUser] = useState({})
    const [error, setError] = useState('')
    const [isLoading, setIsLoading] = useState(true)
    const auth = getAuth()
    const googleProvider = new GoogleAuthProvider();

    // if (user?.email) {
    //     history.push(location.state?.from || "/home")

    // }

    // google sign in method 

    const logInUsingGoogle = () => {
        setIsLoading(true)
        return signInWithPopup(auth, googleProvider)

    }
    const logOut = () => {
        signOut(auth)
            .then(() => {
                setUser({})
            })

    }
    useEffect(() => {
        onAuthStateChanged(auth, user => {
            if (user) {
                // console.log('inside state change ', user)
                setUser(user)
            }
        })

    }, [])
    //End google sign in method 

    return {
        user,
        error,
        isLoading,
        logInUsingGoogle,
        logOut
    }


}
export default useFirebase;