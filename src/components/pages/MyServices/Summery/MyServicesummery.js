import React from "react";

const MyServiceSummery = ({service}) => {
    const { service_name, img } = service
  return (
    <div>
      <div className="card card-compact w-96 bg-base-100 shadow-xl mx-auto my-2">
        <figure>
          <img className="h-[450px] w-[100%]" src={img} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{service_name}</h2>

          <div className="card-actions justify-end">
            <button className="btn btn-primary">Details...</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyServiceSummery;
