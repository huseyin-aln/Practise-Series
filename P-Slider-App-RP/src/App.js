import "./App.css";
import Slider from "./Slider";

function App() {
  return (
    <main>
      <section className="container">
        <div className="tour">
          <h2>
            Our Tours
            <div className="underline"></div>
          </h2>
          <Slider />
        </div>
      </section>
    </main>
  );
}

export default App;
