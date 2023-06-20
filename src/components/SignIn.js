import { useEffect, useState } from "react";
import { auth, provider } from "../firebase.js";
import { signInWithPopup } from "firebase/auth";

function SignIn({ user, setUser }) {
  const handleClick = async () => {
    try {
      /*This function is for user authentication with firebase.It takes auth and provider as props from firebase.js file
      and then the popup windoew opens up.Once sign in is done the response is console logged and user data is stored
      in localstorage*/
      const res = await signInWithPopup(auth, provider);
      console.log(res.user);
      setUser(res.user);
      localStorage.setItem("email", JSON.stringify(res.user));
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col md:mx-8 lg:flex-row-reverse">
          <div className="text-center lg:text-left md:mx-8">
            <h1 className="text-5xl font-bold">Login now!</h1>
            <p className="py-6 md:w-96 md:text-lg">
              This is our Real-Time Chat Application with features like
              Group-Chat, Personal-Chat, Sending Files etc 👀{" "}
            </p>
          </div>
          <div className="card flex-shrink-0 w-screen max-w-sm shadow-2xl bg-base-100">
            <div className="form-control mt-6">
              <button
                onClick={handleClick}
                className="px-4 py-2 border flex gap-2 bg-white border-slate-200 rounded-lg text-slate-700 hover:border-slate-400 hover:text-slate-900 hover:shadow transition duration-150"
              >
                <img
                  className="w-6 h-6"
                  src="https://www.svgrepo.com/show/475656/google-color.svg"
                  loading="lazy"
                  alt="google logo"
                />
                <span>SignIn with Google</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default SignIn;
