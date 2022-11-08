import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import Banner from "./Banner";
import Getup from "./Getup";

import Header from "./Header";
import HomeSummery from "./HomeSummery";

const Home = () => {
  const services = useLoaderData();
  // console.log(service)

  return (
    <div>
      <Header />

      <div className="md:grid grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <HomeSummery service={service} />
        ))}
      </div>
      <Link className="flex justify-center my-5"><button className="btn btn-outline w-[200px]">See all</button></Link>
      

      <Banner />

      <Getup />
    </div>
  );
};

export default Home;
