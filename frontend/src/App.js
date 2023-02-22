import './App.css';
import AddUrlComponent from "./components/AddUrl.js";
import ViewUrlComponent from "./components/ViewUrl.js";

function App() {
  return (
    <div className="App container mt-5">
      <AddUrlComponent />
      <ViewUrlComponent />
    </div>
  );
}

export default App;