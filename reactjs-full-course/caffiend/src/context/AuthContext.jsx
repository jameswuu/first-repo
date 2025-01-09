import { createUserWithEmailAndPassword, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword } from 'firebase/auth'
import { useState, useEffect, useContext} from 'react'
import { auth, db } from '../../firebase'
import { doc, getDoc } from 'firebase/firestore'

const AuthContext = createContext()

export function useAuth() {
    return useContext(AuthContext)
}

export function AuthProvide(props){
    const { children } = props
    const [globalUser, setGlobalUser] = useState(null)
    const [globalData, setGlobalData] = useState(null)
    const [isLoading, setIsLoading] = useState(false)
    
    function signup(email, password) {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    function login(email, password) {
        return signInWithEmailAndPassword(auth, email, password)
    }

    function logout(email, password){
        setUser(null)
        setGlobalData(null)
        return signOut(auth)    
    }

    function resetPassword(email){
        return sendPasswordResetEmail(auth, email)
    }

    const value = { globalUser, globalData, setGlobalData, isLoading, signup, login, logout }

    useEffect(()=>{
        const unsubscribe =  onAuthStateChanged(auth, async(user)=>{ 
            // If there's no user, empty the user state and return from this listener
            if(!user) { return }

            // If there is a user, then check if the user has data in the database, then fetch said data and update the global state
            try{
                setIsLoading(true)

                const docRef = doc(db, 'users', user.uid) //Fetch user data
                const docSnap = await getDoc(docRef)

                let firebaseData = {}
                if (docSnap.exists()) {
                    console.log('Found user data')
                    firebaseData = docRef.data()
                }
                setGlobalData(firebaseData)
            } catch(err){
                console.log(err.message)
            } finally {
                setIsLoading(false)
            }
         })
        return unsubscribe 
    }, [])


    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}