import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import Banner from "./Banner";
import Getup from "./Getup";
import Header from "./Header";
import HomeSummery from "./HomeSummery";

import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';

const Home = () => {
  const services = useLoaderData();

  return (
    <div>
      <Header />
      <p className="text-4xl text-center my-3 text-danger">My Service</p>
      <div className="md:grid grid-cols-2 lg:grid-cols-3 text-center">
        {services.map((service) => (
          <HomeSummery service={service} />
        ))}
      </div>
      <Link to={"/myServices"} className="flex justify-center my-5">
        <button className="btn btn-outline w-[200px]">See all</button>
      </Link>

      <Banner />

      <Getup />
    </div>
  );
};

export default Home;
