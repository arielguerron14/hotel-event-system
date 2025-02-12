import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    console.log("Login clicked");
  };

  return (
    <div>
      <Navbar />
      <main className="p-10">
        <h1 className="text-3xl font-bold">Login</h1>
        <input
          type="email"
          placeholder="Email"
          className="border p-2 m-2"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="border p-2 m-2"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded"
          onClick={handleLogin}
        >
          Login
        </button>
      </main>
      <Footer />
    </div>
  );
};

export default Login;
