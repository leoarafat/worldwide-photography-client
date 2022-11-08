import React, { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import UserReview from "../UserReview/UserReview";


const ServicesDetails = () => {
  const [review, setReview] = useState([])
  const serviceDetail = useLoaderData();
  const { _id, img, camera, details, location, price, service_name, title } =
    serviceDetail;
    
    console.log(review)
    
    useEffect(()=>{
        fetch('http://localhost:5000/feedback')
        .then(res => res.json())
        .then(data => {
            // console.log(data)
            setReview(data)
            
        } )
    },[])

  return (
    <div className="md:grid grid-cols-2">
      <div>
        <div className="card  bg-base-100 shadow-xl">
          <figure>
            <img className="w-full lg:h-full" src={img} alt="Album" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{service_name}</h2>
            <h2 className="text-lg">{title}</h2>
            <p>{details}</p>
            <p>{location}</p>
            <p>{camera}</p>
            <p>Cost: {price}$</p>
            <div className="card-actions justify-end">
             <Link to="/home">
             <button className="btn btn-primary">Back to home</button>
             </Link>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div>

{review.map(rev => <UserReview rev={rev}/> )}
        </div>
    <Link to={`/review/${_id}`} className="flex justify-center my-3">
    <button className="btn btn-warning">Please leave a feedback or review</button>
    </Link>
      </div>
    </div>
  );
};

export default ServicesDetails;
