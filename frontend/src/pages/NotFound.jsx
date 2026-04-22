import { NavLink } from "react-router-dom";


function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-slate-100 text-center p-6">

      <h1 className="text-4xl  mb-3">404!</h1>
      <h2 className="text-2xl font-bold mb-3">
        Oops! Page Not Found
      </h2>

      <NavLink
        to="/"
        className="bg-black text-white px-6 py-3 rounded-lg"
      >
        Go Back Home
      </NavLink>

    </div>
  );
}

export default NotFound;