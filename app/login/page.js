"use client";
import { useState } from "react";
import { login } from "../../controller/accountController";

export default function Login() {
  const [email, setEmail] = useState();
  const [response, setResponse] = useState({});

  async function handleLogin(e) {
    e.preventDefault();
    let response = await login(email);
    setResponse({
      message: response.message,
      success: response.success,
    });
  }

  return (
    <div className="w-[360px] h-full justify-center items-center flex mx-auto">
      <form onSubmit={(e) => handleLogin(e)} className="text-center rounded">
        <h2 className="font-semibold text-3xl mb-3">Log in to your account</h2>
        <p className=" text-center text-slate-500 text-base	mb-8">
          Welcome back! Please enter your details.
        </p>
        <input
          type="email"
          className="p-2 w-full mx-auto block rounded-lg shadow border outline-1"
          placeholder="Your Email"
          required
          onInput={(e) => {
            setEmail(e.target.value);
          }}
        />
        {!!response.message && (
          <small
            className={`${
              !response.success ? "text-red-500" : "text-green-500"
            } font-semibold block mt-2`}
          >
            {response.message}
          </small>
        )}
        {!response.success && (
          <>
            <button className="py-2.5 w-full mt-5 mb-6 bg-[#7F56D9] text-white rounded-lg">
              Continue with email
            </button>

            <div className="divider flex items-center mb-6">
              <hr className="flex-grow" />
              <span className="px-3 text-gray-600 text-sm	">OR</span>
              <hr className="flex-grow" />
            </div>
            <button className="py-2.5 mb-3 text-black w-full border text-white rounded-lg">
              Continue with Google
            </button>
            <button className="py-2.5 text-black w-full border text-white rounded-lg">
              Continue with Github
            </button>
          </>
        )}
      </form>
    </div>
  );
}
