import React from "react";
import { useLoaderData } from "react-router-dom";
import useTitle from "../../Hooks/useTitle";
import MyServiceSummery from "../MyServices/Summery/MyServiceSummery";

const AllService = () => {
    useTitle('allService')
  const services = useLoaderData();
  return (
    <div>
      <p className="text-center text-xl my-3">Here is my all services</p>
      <div className="md:grid grid-cols-2 lg:grid-cols-3 text-center">
        {services.map((service) => (
          <MyServiceSummery service={service} />
        ))}
      </div>
    </div>
  );
};

export default AllService;
