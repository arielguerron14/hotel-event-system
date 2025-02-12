import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = () => {
    console.log("Register clicked");
  };

  return (
    <div>
      <Navbar />
      <main className="p-10">
        <h1 className="text-3xl font-bold">Register</h1>
        <input
          type="text"
          placeholder="Name"
          className="border p-2 m-2"
          onChange={(e) => setName(e.target.value)}
        />
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
          onClick={handleRegister}
        >
          Register
        </button>
      </main>
      <Footer />
    </div>
  );
};

export default Register;
