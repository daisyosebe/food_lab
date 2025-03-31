import { useAuth } from "./AuthContext";

const Login = () => {
  const { signInWithGoogle, signInWithEmail, logout, user } = useAuth();

  return (
    <div>
      {user ? (
        <div>
          <p>Welcome, {user.displayName || user.email}!</p>
          <button onClick={logout}>Logout</button>
        </div>
      ) : (
        <>
          <button onClick={signInWithGoogle}>Sign in with Google</button>
          <button onClick={() => signInWithEmail("test@example.com", "password123")}>
            Sign in with Email
          </button>
        </>
      )}
    </div>
  );
};

export default Login;
