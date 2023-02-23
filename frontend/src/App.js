import './App.css';
import AddUrl from "./components/AddUrl.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ViewUrl from "./components/ViewUrl.js";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<AddUrl/>}/>
        <Route path="/:shortenedUrl" element={<ViewUrl/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;