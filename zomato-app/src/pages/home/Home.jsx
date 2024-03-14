import React, { useState } from "react";
import Header from "../../components/common/header/Header";
import Taboptions from "../../components/common/tabOptions/Taboptions";
import Footer from "../../components/common/footer/Footer";
import Delivery from "../../components/delivery/Delivery";
import Diningout from "../../components/diningout/Diningout";
import Nightlife from "../../components/nightlife/Nightlife";

const Home = () => {
  const [activeTab, setActiveTab] = useState("Delivery");

  const getcorrectscreen = (tab) => {
    switch (tab) {
      case "Delivery":
        return <Delivery />;

      case "Dining out":
        return <Diningout />;

      case "Nightlife":
        return <Nightlife />;

      default:
        return <Delivery />;
    }
  };

  return (
    <>
      <Header />
      <Taboptions activeTab={activeTab} setActiveTab={setActiveTab} />
      {getcorrectscreen(activeTab)}
      <Footer />
    </>
  );
};

export default Home;
