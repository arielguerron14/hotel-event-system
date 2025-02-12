import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Events = () => {
  return (
    <div>
      <Navbar />
      <main className="p-10">
        <h1 className="text-3xl font-bold">Upcoming Events</h1>
        <p>Stay tuned for our latest events at our hotels.</p>
      </main>
      <Footer />
    </div>
  );
};

export default Events;
