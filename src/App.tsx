import React from "react";
import "./App.scss";
import Header from "./Components/Header";
import SectionH1 from "./Components/SectionH1";
import SectionYouCanEasily from "./Components/SectionYouCanEasily";
import SectionAchivements from "./Components/SectionAchivements";
import SectionBenefits from "./Components/SectionBenefits";
import SectionCreatedWith from "./Components/SectionCreatedWith";
import SectionHowItWork from "./Components/SectionHowItWork";
import SectionFAQ from "./Components/SectionFAQ";
import SectionAreYouABusiness from "./Components/SectionAreYouABusiness";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <SectionH1 />
      <SectionYouCanEasily />
      <SectionCreatedWith />
      <SectionAchivements />
      <SectionBenefits />
      <SectionHowItWork />
      <SectionFAQ />
      <SectionAreYouABusiness />
      <Footer />
    </div>
  );
}

export default App;
