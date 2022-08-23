import BigBanner from "./components/BigBanner";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Winter from "./components/Winter";

function App() {
  return (
    <div className="relative">
      <Navbar />
      <BigBanner />
      <Winter />
      {/* <Footer /> */}
    </div>
  );
}

export default App;
