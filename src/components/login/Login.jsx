// src/pages/Login.jsx
import { useState } from "react";
import googleIcon from "../../assets/google-icon.svg"

const Login = () => {
  const [isSignUp, setIsSignUp] = useState(false);

  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-br from-yellow-100 to-orange-200">
      {/* Plate contaner */}
      <div className="relative flex flex-col items-center justify-center w-[350px] h-[350px] rounded-full bg-white shadow-2xl border-[10px] border-gray-200">

        {/* Fork and Knife */}
        <span className="absolute left-[-30px] top-1/2 transform -translate-y-1/2 text-4xl">🍴</span>

        <span className="absolute right-[-30px] top-1/2 transform -translate-y-1/2 text-4xl">🔪</span>


        {/* Inner Form */}
        <div className="flex flex-col gap-4 items-center text-center">
          <h2 className="text-2xl font-bold text-gray-800">
            {isSignUp ? "Create Account" : "Welcome Back"}
          </h2>
          <form className="flex flex-col gap-3 w-64">
            <input
              type="email"
              placeholder="Email"
              className="p-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-400"
              required
            />
            <input
              type="password"
              placeholder="Password"
              className="p-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-400"
              required
            />
            <button
              type="submit"
              className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 rounded transition"
            >
              {isSignUp ? "Sign Up" : "Log In"}
            </button>
          </form>
          <button
            className="text-sm text-orange-600 underline hover:text-orange-800 mt-2"
            onClick={() => setIsSignUp(!isSignUp)}
          >
            {isSignUp ? "Already have an account? Log in" : "Don't have an account? Sign up"}
          </button>

          {/* Divider */}
          <div className="w-full border-t mt-3 border-gray-300 relative">
            <span className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-white px-2 text-sm text-gray-500">
              or
            </span>
          </div>

          {/* Google Login */}
          <button className="flex items-center gap-2 px-4 py-2 border border-gray-400 rounded hover:bg-gray-100">
          <img src={googleIcon} alt="Google" className="w-4 h-4" />

  <span className="text-sm font-medium">Sign in with Google</span>
</button>

        </div>
      </div>
    </div>
  );
};

export default Login;
