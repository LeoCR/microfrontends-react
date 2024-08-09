import React from "react";
import ReactDOM from "react-dom/client";

import "./index.scss";

import Header from "home/Header";
import Footer from "home/Footer";
const App = () => (
  <div className="text-3xl mx-auto max-w-6xl">
    <Header />
    <div className="text-center">
      <img
        src="https://mdbcdn.b-cdn.net/img/new/avatars/8.webp"
        className="rounded-full w-32 mb-4 mx-auto"
        alt="Avatar"
      />
      <h5 className="text-xl font-medium leading-tight mb-2">John Doe</h5>
      <p className="text-gray-500">Web designer</p>
    </div>
    <Footer />
  </div>
);
const rootElement = document.getElementById("app")
if (!rootElement) throw new Error("Failed to find the root element")

const root = ReactDOM.createRoot(rootElement)

root.render(<App />)