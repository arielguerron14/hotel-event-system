import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div>
      <Navbar />
      <main className="p-10">
        <h1 className="text-3xl font-bold">Welcome to Hotel Event System</h1>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
