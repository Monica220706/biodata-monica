import { useState } from "react";

function Navbar() {
  const [openLoginPage, setOpenLoginPage] = useState(false);
  const [title, setTitle] = useState("Biodata Monica");
  
  return (
    <nav className="bg-pink-50 border-b border-pink-200">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Title */}
        <h1 className="text-2xl font-bold text-pink-600">
          {title}
        </h1>

        {/* Menu */}
        <div className="flex gap-6">

          <a
            href="#home"
            onClick={() => setTitle("Home")}
            className="text-pink-500 hover:text-pink-700"
          >
            Home
          </a>

          <a
            href="#biodata"
            onClick={() => setTitle("Biodata")}
            className="text-pink-500 hover:text-pink-700"
          >
            Biodata
          </a>

          <a
            href="#skills"
            onClick={() => setTitle("Skills")}
            className="text-pink-500 hover:text-pink-700"
          >
            Skills
          </a>

          <button
            onClick={() => setOpenLoginPage(!openLoginPage)}
            className="text-pink-500 hover:text-pink-700"
          >
            Login
          </button>

        </div>
      </div>

      {/* Login */}
      {openLoginPage && (
        <div className="bg-pink-100 text-center py-4">
          <p className="text-pink-700">
            Login Page terbuka
          </p>
        </div>
      )}
    </nav>
  );
}

export default Navbar;