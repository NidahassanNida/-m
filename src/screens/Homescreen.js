import React from "react";
import Navbar from "../componenet/Navbar";
import Home from "../componenet/Home";
import Number from "../componenet/Number";
import Section1 from "../componenet/Section1";
import Section2 from "../componenet/Section2";
import Section3 from "../componenet/Section3";
import Menu from "../componenet/Menu";
import Testimonal from "../componenet/Testimonal";
import Faq from "../componenet/Faq";
import Footer from "../componenet/Footer";

class Homescreen extends React.Component {
  render() {
    return (
    <>
      <Navbar />
      <Home />
      <Number />
      <Section1 />
      <Section2 />
      <Section3 />
      <Menu />
      <Testimonal />
      <Faq />
      <Footer/>
    </>);
  }
}
export default Homescreen;

