import { Button } from "@mui/material";
import { Modal } from "antd";
import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Dashboard() {
  const [open, setOpen] = useState(false);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleOk = () => {
    setOpen(false);
  };

  const handleCancel = () => {
    setOpen(false);
  };
  return (
    <>
      <nav className="fixed top-0 z-50 w-full bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
        <div className="px-3 py-3 lg:px-5 lg:pl-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center justify-start rtl:justify-end">
              <button
                onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden p-2 text-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:focus:ring-gray-600"
              >
                <span className="sr-only">Toggle mobile menu</span>
                <svg
                  className="w-6 h-6"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    clipRule="evenodd"
                    fillRule="evenodd"
                    d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>
      <aside
        id="logo-sidebar"
        className={`fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform ${
          isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        } bg-white border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700`}
        style={{ backgroundColor: "#1C4E80" }}
        aria-label="Sidebar"
      >
        <div className="h-full px-3 pb-4 overflow-y-auto dark:bg-gray-800 p-10">
          <ul className="space-y-2 font-medium">
            <div className="image-container">
              <img
                src="https://www.enerpize.com/wp-content/uploads/2019/08/Attendance-Hero.svg"
                alt=""
                className="image"
              />
            </div>
            <div style={{ marginTop: "90px", lineHeight: "30px" }}>
              <li>
                <a
                  href="#"
                  className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white group"
                >
                  <svg
                    className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 18"
                  >
                    <path d="M14 2a3.963 3.963 0 0 0-1.4.267 6.439 6.439 0 0 1-1.331 6.638A4 4 0 1 0 14 2Zm1 9h-1.264A6.957 6.957 0 0 1 15 15v2a2.97 2.97 0 0 1-.184 1H19a1 1 0 0 0 1-1v-1a5.006 5.006 0 0 0-5-5ZM6.5 9a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9ZM8 10H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5Z" />
                  </svg>
                  <span className="flex-1 ms-3 whitespace-nowrap text-white">
                    <Link to={"/Dashboard"}>Students</Link>
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white group"
                >
                  <svg
                    className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M15 2h2v2h-2zm3 3h-2V3a1 1 0 0 0-2 0v2H6V3a1 1 0 0 0-2 0v2H1a1 1 0 0 0-1 1v12a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6a1 1 0 0 0-1-1zm-1 12H2V7h14v10zM7 9a1 1 0 0 0-2 0v1a1 1 0 0 0 2 0V9zm6 0a1 1 0 0 0-2 0v1a1 1 0 0 0 2 0V9z" />
                  </svg>
                  <span className="flex-1 ms-3 whitespace-nowrap text-white">
                    <Link to={"/attendance"}>Attendance</Link>
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white group"
                >
                  <svg
                    className="flex-shrink-0 w-5 h-5 text-white transition duration-75"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 18 16"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M1 8h11m0 0L8 4m4 4-4 4m4-11h3a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-3"
                    />
                  </svg>
                  <span
                    className="flex-1 ms-3 whitespace-nowrap text-white"
                    onClick={() => setOpen(true)}
                  >
                    Sign Out
                  </span>
                </a>
              </li>
            </div>
          </ul>
        </div>
      </aside>
      <Modal
        centered
        visible={open}
        onOk={handleOk}
        onCancel={handleCancel}
        width={500}
        className="custom-modal"
        footer={[
          <Button key="cancel" onClick={handleCancel}>
            No
          </Button>,
          <Button key="signOut" type="primary" onClick={handleOk}>
            <Link to={"/login"}>Yes, Sign Out</Link>
          </Button>,
        ]}
      >
        <div className="mt-2">
          <p>Are you sure you want to sign out?</p>
        </div>
      </Modal>
    </>
  );
}
