import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-blue-600 p-4 text-white flex justify-between">
      <h1 className="text-xl font-bold">Hotel Event System</h1>
      <div>
        <Link to="/" className="px-4">Home</Link>
        <Link to="/events" className="px-4">Events</Link>
        <Link to="/login" className="px-4">Login</Link>
      </div>
    </nav>
  );
};

export default Navbar;
