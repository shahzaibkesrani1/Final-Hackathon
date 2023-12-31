import React, { useState } from "react";
import { Button, Upload } from "antd";
import { IoIosAddCircleOutline } from "react-icons/io";
import "../../../index.css";
import { Link } from "react-router-dom";

export default function Register() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    photo: null,
  });
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handlePhotoChange = (info) => {
    if (info.file.status === "done" && info.fileList.length === 1) {
      setFormData((prevData) => ({
        ...prevData,
        photo: info.file.originFileObj,
      }));
    }
  };

  const props = {
    action: "https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188",
    onChange: handlePhotoChange,
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.password || !formData.photo) {
      setError("Please fill in all fields.");
      return;
    }


    console.log("Form Data:", formData);

    setFormData({
      name: "",
      email: "",
      password: "",
      photo: null,
    });

    setError("");
    setSuccessMessage("Registration successful!");
  };

  return (
    <>
      <div className="flex flex-col lg:flex-row min-h-full">
        <div className="lg:flex-1 flex-col justify-center px-6 lg:px-8">
          <img
            src="https://img.freepik.com/free-vector/forgot-password-concept-illustration_114360-1123.jpg"
            alt="Login Verified"
            className="mx-auto max-w-full Image-Animation"
          />
        </div>
        <div className="lg:flex-1 flex-col justify-center px-6 py-8 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <h2 className="text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
              Sign Up to your account
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
              onSubmit={handleSubmit}
              style={{ padding: "10px 10px" }}
            >
              <div>
                <label
                  htmlFor="Name"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Name
                </label>
                <div className="mt-2">
                  <input
                    id="Name"
                    placeholder="Enter You Name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Email address
                </label>
                <div className="mt-2">
                  <input
                    id="email"
                    placeholder="Enter You Email Address"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
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
                    placeholder="Enter You Password"
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    value={formData.password}
                    onChange={handleInputChange}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="photo"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Photo
                </label>
                <Upload {...props} maxCount={1}>
                  <Button icon={<IoIosAddCircleOutline />}>Upload</Button>
                </Upload>
              </div>

              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Sign Up
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

            <p className="mt-4 text-center text-sm text-gray-500">
              Already Have an Account?{" "}
              <Link
                to="/login"
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
