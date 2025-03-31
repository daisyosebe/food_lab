import { createContext, useContext, useState, useEffect } from "react";
import { auth, googleProvider } from "../firebase/auth";
import { signInWithPopup, signInWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth";

// Create Auth Context
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Check if user is logged in
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  // Google Sign In
  const signInWithGoogle = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
    } catch (error) {
      console.error(error.message);
    }
  };

  // Email & Password Sign In
  const signInWithEmail = async (email, password) => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
      console.error(error.message);
    }
  };

  // Logout
  const logout = async () => {
    await signOut(auth);
  };

  return (
    <AuthContext.Provider value={{ user, loading, signInWithGoogle, signInWithEmail, logout }}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

// Custom Hook for Auth
export const useAuth = () => useContext(AuthContext);
