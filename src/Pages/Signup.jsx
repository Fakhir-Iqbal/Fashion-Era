import React, { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import {
  getAuth,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithPopup,
  GoogleAuthProvider,
  signInWithRedirect,
  getRedirectResult,
} from "firebase/auth";
import { FcGoogle } from "react-icons/fc";
import app from "../Firebase/firebase";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [number, setNumber] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const auth = getAuth(app);
  const provider = new GoogleAuthProvider();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        alert("User is already logged in. Please log out first.");
        navigate("/");
      }
    });

    getRedirectResult(auth)
      .then((result) => {
        if (result) {
          const user = result.user;
          console.log("User signed in with Google:", user);
          alert("User signed in successfully with Google");
          navigate("/");
        }
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error("Error during Google Sign-In:", errorCode, errorMessage);
      });

    return () => unsubscribe();
  }, [auth, navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !password || !number) {
      setError("All fields are required.");
      return;
    }

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log("User signed up:", user);
        alert("User signed up successfully");
        navigate("/");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        if (errorCode === "auth/email-already-in-use") {
          alert("Email already in use. Redirecting to Login page.");
          navigate("/login");
        } else {
          setError(errorMessage);
        }
        console.error("Error signing up:", errorCode, errorMessage);
      });
  };

  const handleGoogleSignIn = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        console.log("User signed in with Google:", user);
        alert("User signed in successfully with Google");
        navigate("/");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error("Error during Google Sign-In:", errorCode, errorMessage);
        alert(`Error during Google Sign-In: ${errorMessage}`);
      });
  };

  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="max-w-md w-full px-4 py-8 bg-white shadow rounded-lg">
          <h2 className="text-4xl font-semibold text-center mb-4 text-[#004743]">
            Sign Up
          </h2>
          {error && <p className="text-red-500 text-center">{error}</p>}
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Name
              </label>
              <input
                id="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="mt-1 block w-full border-gray-300 rounded-md shadow-md p-2"
                required
              />
            </div>
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
                className="mt-1 block w-full border-gray-300 rounded-md shadow-md p-2"
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
                className="mt-1 block w-full border-gray-300 rounded-md shadow-md p-2"
                required
              />
            </div>
            <div>
              <label
                htmlFor="number"
                className="block text-sm font-medium text-gray-700"
              >
                Number
              </label>
              <input
                id="number"
                type="text"
                value={number}
                onChange={(e) => setNumber(e.target.value)}
                className="mt-1 block w-full border-gray-300 rounded-md shadow-md p-2"
                required
              />
            </div>
            <div>
              <button
                type="submit"
                className="w-full bg-[#004743] text-white py-2 px-4 rounded-md hover:bg-[#133b39] focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100"
              >
                Sign Up
              </button>
            </div>
          </form>
          <p className="text-center mt-3">Or</p>

          <div>
            <button
              onClick={handleGoogleSignIn}
              className="w-full flex items-center justify-center bg-white border border-gray-300 text-gray-700 py-2 px-4 rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-gray-100"
            >
              <FcGoogle className="text-3xl mr-2" />
              Continue with Google
            </button>
          </div>
          <p className="flex gap-2 justify-center pt-3">
            Already have an account?{" "}
            <NavLink to="/login" className="text-[#004743]">
              Sign in
            </NavLink>
          </p>
        </div>
      </div>
    </>
  );
};

export default Signup;
