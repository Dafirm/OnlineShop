import React from "react";

import { Link } from "react-router-dom";

const Home: React.FC = () => {
  return (
    <>
      <div className="bg-gray-200 min-h-screen flex flex-col jd-flex justify-content-between align-items-baseline">
        <header className="bg-white p-6">
          <h1 className="text-4xl font-medium">Welcome to Our Store</h1>
        </header>
        <main className="flex-1 p-6">
          <p>Here is some information about my app and its features.</p>
          <img
            alt="img"
            src="https://images01.nicepagecdn.com/page/10/88/website-template-preview-108822.jpg"
          />
        </main>
        <div className="bg-white p-6">
          <span>Follow this link to know more about our products</span>
          <Link to="/shop"> Goto Store</Link>
        </div>

        <footer className="bg-white p-6">
          <p>Copyright © 2021 Dafirm</p>
        </footer>
      </div>
    </>
  );
};

export default Home;
