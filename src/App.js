import BigBanner from "./components/BigBanner";
import Footer from "./components/Footer";
import LinkedCard from "./components/LinkedCard";
import Navbar from "./components/Navbar";
import Winter from "./components/Winter";

function App() {
  return (
    <div className="relative">
      <Navbar />
      <BigBanner />
      <Winter />
      <div className="px-2 flex">
        <LinkedCard />
        <LinkedCard />
        <LinkedCard />
      </div>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
