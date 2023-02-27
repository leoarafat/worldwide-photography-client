import React, { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { userContext } from "../../AuthProvider/AuthContext";
import useTitle from "../../Hooks/useTitle";
import Loader from "../../Loading/Loader";
import MyServiceSummery from "../MyServices/Summery/MyServiceSummery";

const AllService = () => {
  useTitle("allService");
  const services = useLoaderData();

  return (
    <div>
      <p className="text-center text-3xl py-5">All Service</p>
      <div className="md:grid grid-cols-2 lg:grid-cols-3 text-center">
        {services.length > 0 ? (
          services?.map((service) => <MyServiceSummery service={service} />)
        ) : (
          <div className="flex flex-col justify-center items-center">
            <p className="text-center text-5xl text-red-800 my-2">
              Services is empty
            </p>
            <Loader />
          </div>
        )}
      </div>
    </div>
  );
};

export default AllService;
