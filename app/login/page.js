"use client";
import { use, useState } from "react";
import * as account from "../../controller/accountController";

export default function Login() {
  const [email, setEmail] = useState();
  const [response, setResponse] = useState({});

  async function handleLogin(e) {
    e.preventDefault();
    let response = await account.login(email);
    setResponse({
      message: response.message,
      success: response.success,
    });
  }

  return (
    <div className="w-90 h-full justify-center items-center flex container mx-auto">
      <form
        onSubmit={(e) => handleLogin(e)}
        className="text-center rounded p-10 border"
      >
        <h2 className="mb-5">Login {email}</h2>
        <input
          type="email"
          className="p-2 mx-auto block rounded border"
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

        <button className="px-4 mt-5 bg-indigo-500 text-white py-3 border rounded-md">
          Sign in with E-mail
        </button>
      </form>
    </div>
  );
}
