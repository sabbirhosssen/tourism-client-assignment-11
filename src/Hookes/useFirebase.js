import { useEffect, useState } from "react"
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";
import initializeAuthentication from "../Firebases/firebase.init";


initializeAuthentication();
const useFirebase = () => {
    const [user, setUser] = useState({})
    const [error, setError] = useState('')
    const auth = getAuth()
    const googleProvider = new GoogleAuthProvider();

    const logInUsingGoogle = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                console.log(result.user)
                setUser(result.user)
            }).catch(error => {
                setError(error.message)
            })
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
                console.log('inside state change ', user)
                setUser(user)
            }
        })

    }, [])


    return {
        user,
        error,
        logInUsingGoogle,
        logOut
    }


}
export default useFirebase;