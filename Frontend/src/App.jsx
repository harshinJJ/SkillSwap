import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Loginpage from "./components/Loginpage";
import Signuppage from "./components/Signuppage";
import Coursedetails from "./components/Coursedetails";
import Specificcoursedetail from "./components/Specificcoursedetail";
import Subscription from "./components/Subscription";
import Allcoursedetails from "./components/Allcoursedetails";
import Adminproductadding from "./components/Adminproductadding";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/Login" element={<Loginpage />} />
            <Route exact path="/Signup" element={<Signuppage />} />
            <Route exact path="/" element={<Signuppage />} />
            <Route
              exact
              path="/allcoursedetails/:categories"
              element={<Allcoursedetails />}
            />
            <Route
              exact
              path="/Specificcoursedetail"
              element={<Specificcoursedetail />}
            />
            <Route exact path="/Subscription" element={<Subscription />} />
            <Route exact path="/coursedetail" element={<Coursedetails />} />
            <Route exact path="/Adminproductadding" element={<Adminproductadding />} />
          </Route>
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
