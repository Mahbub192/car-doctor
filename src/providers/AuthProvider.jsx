/* eslint-disable react/prop-types */
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.confige";

export const AuthContext = createContext();
const auth = getAuth(app)
const GoogleProvider = new GoogleAuthProvider();

const AuthProvider = ({children}) => {
    const [user, setUser] = useState('')
    const [loading, setLoading] = useState(true)

    const createUser =(email, password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const loginUser =(email, password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const googleLogin =()=>{
        return signInWithPopup(auth, GoogleProvider);
    }
    const logout =() =>{
        setLoading(true)
        return signOut(auth);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            console.log('current user', currentUser);
            setLoading(false);
            if(currentUser){
                const loadedUser ={
                    email: currentUser.email
                  }
                  
                  fetch('https://car-doctor-server-ebon.vercel.app/jwt',{
                    method:"POST",
                    headers:{
                      'content-type':'application/json'
                    },
                    body: JSON.stringify(loadedUser)
                  })
                  .then(res => res.json())
                  .then(data =>{
                    // console.log('jwt data',data);
                    localStorage.setItem('car-secret-token', data.token)
                    
                  })
            }
            else{
                localStorage.removeItem('car-secret-token')
            }
        });
        return () => {
            return unsubscribe();
        }
    }, [])

    const authInfo ={
        auth,
        createUser,
        loginUser,
        user,
        loading,
        logout,
        googleLogin,
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}            
        </AuthContext.Provider>
    );
};

export default AuthProvider;