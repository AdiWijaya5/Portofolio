import Navbar from "./commponets/Navbar";
import HomePages from "./commponets/pages/HomePages";
import Contact from "./commponets/Contact";
import Footer from "./commponets/Footer";

function App() {
  return (
    <div>
      {/* Navbar */}
      <Navbar />

      {/* Content */}
      <HomePages />

      <Contact />

      {/* Footer*/}
      <Footer />
    </div>
  );
}

export default App;
