import React, { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import {
  getAuth,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import app from "../Firebase/firebase";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const auth = getAuth(app);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        navigate("/");
      }
    });

    return () => unsubscribe();
  }, [auth, navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log("User signed in:", user);
        alert("User is logged in successfully");
        navigate("/"); // Redirect to home or dashboard page
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setError(errorMessage);
        console.error("Error signing in:", errorCode, errorMessage);
        alert(`Error signing in: ${errorMessage}`);
      });
  };

  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="max-w-md w-full px-4 py-8 bg-white shadow rounded-lg text-center">
          <h2 className="text-4xl font-semibold text-center text-[#004743]">
            WELCOME BACK
          </h2>
          <h2 className="text-sm text-center text-[#777777]">
            Welcome back! please enter your details.
          </h2>
          <hr />
          {error && <p className="text-red-500">{error}</p>}
          <form className="space-y-4 pt-3 text-left" onSubmit={handleSubmit}>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email Address
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1 block w-full border-gray-300 rounded-md shadow-md focus:ring-indigo-500 focus:border-indigo-500 p-2"
                required
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="mt-1 block w-full border-gray-300 rounded-md shadow-md focus:ring-indigo-500 focus:border-indigo-500 p-2"
                required
              />
            </div>
            <div>
              <button
                type="submit"
                className="w-full bg-[#004743] text-white py-2 px-4 rounded-md hover:bg-[#133b39] focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100"
              >
                Sign In
              </button>
            </div>
          </form>
          <p className="flex justify-center flex-col pt-3">
            Don't have an account?{" "}
            <NavLink to="/signup" className="text-[#004743]">
              Sign Up For Free
            </NavLink>
          </p>
        </div>
      </div>
    </>
  );
};

export default Login;
