import React, { useContext } from "react";
import { Link, useLoaderData } from "react-router-dom";
import{ userContext } from "../../AuthProvider/AuthContext";
import useTitle from "../../Hooks/useTitle";
import Loader from "../../Loading/Loader";
import Banner from "./Banner";
import Getup from "./Getup";
import Header from "./Header";
import HomeSummery from "./HomeSummery";


const Home = () => {
  useTitle('home')
  const services = useLoaderData();
  const {loading} = useContext(userContext)
  if(loading){
    return <Loader/>
  }

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

      <div className="">
        <p className="text-center text-xl my-3 bg-warning w-[300px] mx-auto p-3 rounded">
          Popular destination
        </p>
        <Banner />
      </div>

      <Getup />
    </div>
  );
};

export default Home;
