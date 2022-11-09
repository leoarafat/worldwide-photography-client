import React, { useContext, useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { userContext } from "../../AuthProvider/AuthContext";
import useTitle from "../../Hooks/useTitle";
import DetailReview from "../UserReview/DetailReview";

const ServicesDetails = () => {
  useTitle('service_details')
  // const [review, setReview] = useState([]);
  const serviceDetail = useLoaderData();
  const [userRev, setUserRev] = useState([]);
  const { user } = useContext(userContext);
  const { _id, img, camera, details, location, price, service_name, title } =
    serviceDetail;

  // useEffect(() => {
  //   fetch(`http://localhost:5000/feedback/${_id}`)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log(data);
  //       setUserRev(data);
  //     });
  // }, [_id]);
  useEffect(() => {
    fetch(`http://localhost:5000/feedback/${_id}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setUserRev(data);
      });
  }, [_id]);

  const handleDelete = (id) => {
    const agree = window.confirm("Are you sure to delete this item?");
    if (agree) {
      fetch(`http://localhost:5000/feedback/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.deletedCount > 0) {
            alert("deleted successfully");
            const remaining = userRev.filter((rev) => rev._id !== id);
            setUserRev(remaining);
          }
        });
    }
  };

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
          {
            // userRev.map(rev => {
            //   return (
            //     <div>
            //       <p>{rev.name}</p>
            //     </div>
            //   )
            // })
            userRev.map((review) => (
              <DetailReview handleDelete={handleDelete} review={review} />
            ))
          }
        </div>
        {user ? (
          <>
            <Link to={`/review/${_id}`} className="flex justify-center my-3">
              <button className="btn btn-warning">Please leave a review</button>
            </Link>
          </>
        ) : (
          <div className="w-[300px] mx-auto">
            <Link
              to={`/review/${_id}`}
              className="flex justify-center my-3 btn btn-warning"
            >
              Please Login to add a review
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default ServicesDetails;
