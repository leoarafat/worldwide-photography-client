import React from "react";
import { useLoaderData } from "react-router-dom";
import MyServiceSummery from "./Summery/MyServicesummery";

const MyServices = () => {
  const services = useLoaderData();
  //   console.log(services)

  //
  return (
    <div className="md:grid grid-cols-2 lg:grid-cols-3 text-center">
      {services.map((service) => (
        <MyServiceSummery service={service} />
      ))}
    </div>
  );
};

export default MyServices;
