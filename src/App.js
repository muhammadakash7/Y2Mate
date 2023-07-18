import { BrowserRouter as Router, Routes, Route, } from "react-router-dom";
import "./App.css";
import Footer from "./components/first/Footer";
import Navbar from "./components/first/Navbar";
import Home from "./components/first/Section";
import MpThree from "./components/second/Section";
import MpFour from "./components/third/Section";
import Shorts from "./components/fourth/Section";
import Faq from "./components/first/Faq";
import ContactUs from "./components/first/ContactUs";
import TermsServices from "./components/first/TermsServices";
import PrivacyPolicy from "./components/first/PrivacyPolicy";
import Users from "./components/first/Users";
import UserDetailPage from "./components/first/UserDetailPage";
import PageNotFound from './components/PageNotFound';
import data from './Records.json';
import i18n from './i18n'



function App() {
  const Id = data.id;
  console.log(Id);

  const handleClick=(e)=>{
    i18n.changeLanguage(e.target.value);
  }
  return (
    <>
      <Router>
        {/* <ChangeLanguage/> */}
        <Navbar onChange={(e)=>handleClick(e)}/>

        <Routes>
          <Route exact path="/:id" element={<Home id={Id} />} />
          <Route exact path="/:id/youtube-to-mp3" element={<MpThree id={Id} />} />
          <Route exact path="/:id/youtube-to-mp4" element={<MpFour id={Id} />} />
          <Route exact path="/:id/shorts" element={<Shorts id={Id} />} />
          <Route path='/users' element={<Users />} />
          <Route path='/users/:id' element={<UserDetailPage />} />
          <Route exact path="/faq" element={<Faq />} />
          <Route exact path="/contact" element={<ContactUs />} />
          <Route exact path="/terms" element={<TermsServices />} />
          <Route exact path="/privacy" element={<PrivacyPolicy />} />
          <Route path='*' element={<PageNotFound />}></Route>
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
