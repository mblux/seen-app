import React, { useContext, useState } from "react"
import { auth } from "../../firebase"
import { createUserWithEmailAndPassword } from "firebase/auth"

const AuthContext = React.createContext()

export function useAuth() {
  return useContext(AuthContext)
}
export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState()

  function signUp(email, password) {
    return createUserWithEmailAndPassword(auth, email, password)
  }

  React.useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user)
      console.log(auth)
    })
    return unsubscribe
  }, [])

  const value = {
    currentUser,
    signUp,
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}
