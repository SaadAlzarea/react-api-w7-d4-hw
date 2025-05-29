import { Link, useNavigate } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";

function Nav() {
  const isLoggedIn = Boolean(localStorage.getItem("email"));
  let navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("id");
    alert("You have been logged out.");
    navigate("/");
  };

  return (
    <div>
      <nav className="bg-gray-200 p-4">
        <div className="container mx-auto flex justify-between items-center">
          {/* Logo */}


          {/* Navigation Links */}
          <ul className="flex space-x-4 text-black">
            <li>
              <p className="md:hidden lg:hidden">
                <RxHamburgerMenu />
              </p>
            </li>
            <li className="hidden md:block lg:block">
              <p className="hover:text-gray-800">Home</p>
            </li>
            <li className="hidden md:block lg:block">
              <p className="hover:text-gray-800">Contact</p>
            </li>
            <li className="hidden md:block lg:block">
              <p className="hover:text-gray-800">About</p>
            </li>
            <li className="hidden md:block lg:block">
              <p className="hover:text-gray-800">Support</p>
            </li>
          </ul>

          {/* Buttons */}
          <div className="space-x-4">
            {!isLoggedIn ? (
              <>
                <Link
                  to="/register"
                  className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                >
                  Register
                </Link>
                <Link
                  to="/login"
                  className="px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700"
                >
                  Login
                </Link>
              </>
            ) : (
              <button
                onClick={logout}
                className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
              >
                Logout
              </button>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Nav;
