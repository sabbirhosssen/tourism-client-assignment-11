import { useEffect, useState } from "react"
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";
import initializeAuthentication from "../Firebases/firebase.init";



initializeAuthentication();
const useFirebase = () => {

    const [user, setUser] = useState({})
    const [error, setError] = useState({})
    const [isLoading, setIsLoading] = useState(true)
    const auth = getAuth()
    const googleProvider = new GoogleAuthProvider();



    // google sign in method 

    const logInUsingGoogle = () => {
        setIsLoading(true)
        return (signInWithPopup(auth, googleProvider)
            .catch(error => { setError(error.message) })
            .finally(() => setIsLoading(false))
        )



    }
    const logOut = () => {
        signOut(auth)
            .then(() => {
                setUser({})
            }).finally(() => setIsLoading(false))

    }
    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, user => {
            if (user) {
                // console.log('inside state change ', user)
                setUser(user)
            } else {
                setUser({})
            }
            setIsLoading(false)
        })
        return () => unsubscribed
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