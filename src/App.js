import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Homepage from "./screens/Homepage";
import Showdetail from "./screens/Showdetail";
import Error from "./screens/Error";
import Booking from "./screens/Booking";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route index element={<Homepage />}></Route>
          <Route path="show/:name" element={<Showdetail />}></Route>
          <Route path="book/:name" element={<Booking />}></Route>
          <Route path="/*" element={<Error />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
