import "./App.css";
import Events from "./components/1-event-intro/Events";
import "bootstrap/dist/css/bootstrap.min.css";
import Counter from "./components/2-classComponent/Counter";

function App() {
  return (
    <div className="App">
      <h1>Hi Guys.</h1>
      <Events />
      <Counter count={10} />
      <Counter />
    </div>
  );
}

export default App;
