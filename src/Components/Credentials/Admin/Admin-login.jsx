'use client'
import React, { useState } from "react";
import { createBrowserHistory } from "history";

const history = createBrowserHistory();

export default function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    if (email === "shahzaib@example.com" && password === "123456") {
      setEmail("");
      setPassword("");

      setError("");
      setSuccessMessage("Login successful!");

      history.push("/dashboard");
      
    } else {
      setError("Invalid email or password");
      setSuccessMessage("");
    }
  };

  return (
    <>
      <div className="flex flex-col lg:flex-row min-h-full">
        <div className="lg:flex-1 flex-col justify-center px-6 py-8 lg:px-8 mt-10">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <h2 className="text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
              Enter Your Admin Credentials
            </h2>
          </div>

          <div
            className="sm:mx-auto sm:w-full sm:max-w-sm lg:mt-0 lg:w-full lg:max-w-md"
            style={{
              boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
              padding: "10px 10px",
              borderRadius: "9px",
              marginTop: "20px",
            }}
          >
            <form
              className="space-y-6 mt-5"
              style={{ padding: "10px 10px" }}
              onSubmit={handleLogin}
            >
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Enter Id
                </label>
                <div className="mt-2">
                  <input
                    placeholder="Enter Id"
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between">
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Password
                  </label>
                </div>
                <div className="mt-2">
                  <input
                    id="password"
                    placeholder="Enter Password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Log In
                </button>
              </div>
            </form>

            {error && (
              <p className="mt-4 text-center text-sm text-red-500">{error}</p>
            )}

            {successMessage && (
              <p className="mt-4 text-center text-sm text-green-500">
                {successMessage}
              </p>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
