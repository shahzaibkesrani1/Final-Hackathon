import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    if (!email || !password) {
      setError("Please enter both email and password.");
      return;
    }

    console.log("Email:", email);
    console.log("Password:", password);

    setEmail("");
    setPassword("");

    setError("");
    setSuccessMessage("Login successful!");
  };

  return (
    <>
      <div className="flex flex-col lg:flex-row min-h-full">
        <div className="lg:flex-1 flex-col justify-center px-6 lg:px-8">
          <img
            src="https://i.pinimg.com/originals/6b/1b/22/6b1b22573f9f3d4bba11a9fa5cb45652.png"
            alt="Login Verified"
            className="mx-auto max-w-full Image-Animation"
          />
        </div>
        <div className="lg:flex-1 flex-col justify-center px-6 py-8 lg:px-8 mt-10">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <h2 className="text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
              Sign In to your account
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
                  Email address
                </label>
                <div className="mt-2">
                  <input

placeholder="Enter You Email Address"
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
                    placeholder="Enter You Password"
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
                  Sign In
                </button>
              </div>
            </form>

            {/* Display error message if any */}
            {error && (
              <p className="mt-4 text-center text-sm text-red-500">{error}</p>
            )}

            {/* Display success message if any */}
            {successMessage && (
              <p className="mt-4 text-center text-sm text-green-500">
                {successMessage}
              </p>
            )}

            <p className="mt-4 text-center text-sm text-gray-500">
              Don't Have an Account?{" "}
              <Link
                to="/"
                className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
              >
                Click Here
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
