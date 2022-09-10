import "./App.css";
import Generator from "./components/Generator/Generator";
import Header from "./components/Header/Header";

function App() {
  return (
    <div className="App">
      <Header name="Generator"/>
      <Generator />
    </div>
  );
}

export default App;
