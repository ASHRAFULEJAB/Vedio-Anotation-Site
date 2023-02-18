import React from "react";
import Anotation from "../components/HomePage/Anotation";
import Client from "../components/HomePage/Client";
import HomeBanner from "../components/HomePage/HomeBanner";
import HomePageService from "../components/HomePage/HomePageService";
import Reviews from "../components/HomePage/Reviews";
import Team from "../components/HomePage/Team";
const Home = () => {
  return (
    <div>
      <HomeBanner />
      <Anotation />
      <HomePageService />
      <Client />
      <Reviews />
      <Team />
    </div>
  );
};

export default Home;
