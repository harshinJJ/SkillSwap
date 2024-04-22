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
import Personalassistance from "./components/Personalassistance";
import Personalassistanceadding from "./components/Personalassistanceadding";
import Mymessages from "./components/Mymessages";
import Adminsubscriptionupdate from "./components/Adminsubscriptionupdate";
import Adminupdatecourse from "./components/Adminupdatecourse";
import PaymentForm from "./components/PaymentForm";
import Coursevideoupload from "./components/Coursevideoupload";


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
              path="/Specificcoursedetail/:id"
              element={<Specificcoursedetail />}
            />
            <Route exact path="/Subscription" element={<Subscription />} />
            <Route exact path="/coursedetail/:id" element={<Coursedetails />} />
            <Route
              exact
              path="/Adminproductadding"
              element={<Adminproductadding />}
            />
            <Route
              exact
              path="/Personalassistance"
              element={<Personalassistance />}
            />
            <Route
              exact
              path="/Personalassistanceadding"
              element={<Personalassistanceadding />}
            />
            <Route exact path="/mymessage" element={<Mymessages />} />
            <Route
              exact
              path="/adminsubscriptionupdate/:subscriptionid"
              element={<Adminsubscriptionupdate />}
            />
            <Route
              exact
              path="/adminupdatecourse"
              element={<Adminupdatecourse />}
            />
            <Route
              exact
              path="/adminvideoupload/:id"
              element={<Coursevideoupload />}
            />
            <Route
              exact
              path="/PaymentForm/:subscriptionid"
              element={<PaymentForm />}
            />
          </Route>
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
