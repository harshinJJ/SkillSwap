import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route>
            <Route exact path="/" element={<Home />} />
          </Route>
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
