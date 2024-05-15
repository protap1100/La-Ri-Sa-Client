import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import app from "../Firebase/FirebaseConfig";
import axios from "axios";

export const AuthContext = createContext(null);

const auth = getAuth(app)

const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email,password) =>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth,email,password);
    }
    
    const signIn =  (email,password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password);
    }

    const googleSignIn = () =>{
        const provider = new GoogleAuthProvider;
        setLoading(true)
        const auth = getAuth(app);
        return signInWithPopup(auth, provider);
    }

    const updateUserProfile = (displayName, photoURL) => {
        setLoading(true);
        return updateProfile(auth.currentUser, {
            displayName: displayName,
            photoURL: photoURL
        })
        .then(() => {
            // console.log('Profile updated successfully');
        })
        .catch(() => {
            // console.error('Error updating profile:', error);
        })
        .finally(() => {
            setLoading(false);
        });
    }

    const logOut = () =>{
        setLoading(true)
        return signOut(auth);
    }

    useEffect(()=>{
        const unSubscribe =  onAuthStateChanged(auth, currentUser =>{
            //  console.log('User Changing in state',currentUser);  
            const userEmail = currentUser?.email || user?.email;
            const loggedUser = {email : userEmail}
             setUser(currentUser);
             setLoading(false);
             if(currentUser){
                axios.post('https://laarisa-booking-server-site.vercel.app/jwt',loggedUser, {withCredentials: true})
                .then(()=>{
                    // console.log('token response:',res.data)
                })
            }else{
                axios.post('https://laarisa-booking-server-site.vercel.app/logout',loggedUser ,{
                    withCredentials: true
                })
                .then(()=>{
                    // console.log(res.data)
                })
            }
         } );
         return () =>{
             unSubscribe();
         }
     },[user?.email])

    const authInfo = {
        user,
        createUser,
        signIn,
        logOut,
        googleSignIn,
        updateUserProfile,
        loading
    }


    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;