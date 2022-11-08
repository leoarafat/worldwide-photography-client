import React from "react";
import { PhotoProvider, PhotoView } from "react-photo-view";
import 'react-photo-view/dist/react-photo-view.css';
import { Link } from "react-router-dom";


const MyServiceSummery = ({ service }) => {
  const { _id, service_name, img, price, details } = service;
  return (
    <div>
      <div className="card card-compact w-96 bg-base-100 shadow-xl mx-auto my-2">
        <figure>
          <PhotoProvider>
            <PhotoView src={img}>
              <img className="h-[450px] w-[100%]" src={img} alt="" />
            </PhotoView>
          </PhotoProvider>
        </figure>
        <div className="card-body">
          <h2 className="card-title">{service_name}</h2>
          <h5 className="text-xl">Price {price}$</h5>
          <>
            {details.length > 100 ? (
              <> {details.slice(0, 100) + "..."} </>
            ) : (
              details
            )}
          </>
          <div className="card-actions justify-end">
            <Link>
            <button className="btn btn-primary">Details...</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyServiceSummery;

{
  /* <img className="h-[450px] w-[100%]" src={img} alt="Shoes" /> */
}
