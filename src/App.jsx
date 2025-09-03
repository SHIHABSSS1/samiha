import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./pages/Home.jsx";
import Passport from "./pages/Passport.jsx";
import Visa from "./pages/Visa.jsx";
import Flights from "./pages/Flights.jsx";
import Hotels from "./pages/Hotels.jsx";
import Holidays from "./pages/Holidays.jsx";
import Umrah from "./pages/Umrah.jsx";
import WorkVisa from "./pages/WorkVisa.jsx";
import Contact from "./pages/Contact.jsx";
import LiveChatWidget from "./components/LiveChatWidget.jsx";

function App() {
  return (
    <div className="min-h-full flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/passport" element={<Passport />} />
          <Route path="/visa" element={<Visa />} />
          <Route path="/flights" element={<Flights />} />
          <Route path="/hotels" element={<Hotels />} />
          <Route path="/holidays" element={<Holidays />} />
          <Route path="/umrah" element={<Umrah />} />
          <Route path="/work-visa" element={<WorkVisa />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
      <LiveChatWidget />
    </div>
  );
}

export default App
