import React, { useContext, useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { userContext } from "../../AuthProvider/AuthContext";
import useTitle from "../../Hooks/useTitle";
import DetailReview from "../UserReview/DetailReview";
import {
  MapPinIcon,
  CameraIcon,
  CurrencyDollarIcon,
} from "@heroicons/react/24/solid";
import toast from "react-hot-toast";
const ServicesDetails = () => {
  useTitle("service_details");

  const serviceDetail = useLoaderData();
  const [userRev, setUserRev] = useState([]);
  //new new]
  const [review, setReview] = useState({});
  const { user } = useContext(userContext);
  const { _id, img, camera, details, location, price, service_name, title } =
    serviceDetail;

  useEffect(() => {
    fetch(`https://assignment-11-server-iota.vercel.app/feedback/${_id}`)
      .then((res) => res.json())
      .then((data) => {
        setUserRev(data);
      });
  }, [_id]);

  const handleDelete = (id) => {
    const agree = window.confirm("Are you sure to delete this item?");
    if (agree) {
      fetch(`https://assignment-11-server-iota.vercel.app/feedback/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.deletedCount > 0) {
            toast.success("Delete Successful!");
            const remaining = userRev.filter((rev) => rev._id !== id);
            setUserRev(remaining);
          }
        });
    }
  };
  //other section
  const handleFeedback = (e) => {
    e.preventDefault();

    const form = e.target;
    const name = form.name.value;
    const email = user?.email || "Unregistered";
    const photo = form.photoURL.value;
    const feedback = form.feedback.value;
    const review = {
      service: _id,
      email,
      name,
      time: new Date(),
      photo,
      feedback,
    };
    fetch("https://assignment-11-server-iota.vercel.app/feedback", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(review),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          toast.success("Reviewed!");
          // e.target.reset()
          form.reset();
          setUserRev((prevRevs) => [review, ...prevRevs]);
        }
      });
  };

  return (
    <div className="md:grid grid-cols-2">
      <div>
        <div className="card  bg-base-100 shadow-xl">
          <figure>
            <img className="w-full h-[450px]" src={img} alt="Album" />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-purple-600">{service_name}</h2>
            <h2 className="text-lg">{title}</h2>
            <p>{details}</p>
            <div className="flex">
              <MapPinIcon className="w-6 h-6" />
              <p>{location}</p>
            </div>

            <div className="flex">
              <CurrencyDollarIcon className="w-6 h-6" />
              <p>Cost: {price}</p>
            </div>

            <div className="flex">
              <CameraIcon className="w-6 h-6" />
              <p>{camera}</p>
            </div>

            <div className="card-actions justify-end">
              <Link to="/home">
                <button className="btn btn-primary">Back to home</button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div>
        <p className="text-center text-4xl my-4">User Review..</p>
        <div>
          {userRev.map((review) => (
            <DetailReview
              serviceName={service_name}
              handleDelete={handleDelete}
              review={review}
            />
          ))}
        </div>

        {user ? (
          <>
            <form onSubmit={handleFeedback}>
              <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                  <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Please Review!</h1>
                    <p className="py-6">
                      If you like my photography please leave a review. Thank
                      you.
                    </p>
                  </div>
                  <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                      <div className="form-control">
                        <label className="label">
                          <span className="label-text">Name</span>
                        </label>
                        <input
                          type="text"
                          placeholder="Your name"
                          className="input input-bordered"
                          name="name"
                          required
                        />
                      </div>
                      <div className="form-control">
                        <label className="label">
                          <span className="label-text">Email</span>
                        </label>
                        <input
                          type="email"
                          placeholder="Your email"
                          className="input input-bordered"
                          name="email"
                          defaultValue={user?.email}
                          required
                          readOnly
                        />
                      </div>
                      <div className="form-control">
                        <label className="label">
                          <span className="label-text">Photo</span>
                        </label>
                        <input
                          type="text"
                          placeholder="PhotoURL"
                          className="input input-bordered"
                          name="photoURL"
                          required
                        />
                      </div>

                      <div className="form-control">
                        <label className="label">
                          <span className="label-text">Feedback</span>
                        </label>
                        <textarea
                          className="textarea textarea-bordered h-24"
                          placeholder="Leave a feedback"
                          name="feedback"
                          required
                        ></textarea>
                        <label className="label"></label>
                      </div>
                      <div className="form-control mt-6">
                        <button className="btn btn-primary">Submit</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </>
        ) : (
          <div className="my-3 flex items-center justify-center">
            <p className="text-red-600">
              Please login and give your valuable feedback
            </p>
            <span>
              {" "}
              <Link to="/login" className="btn btn-link">
                Login
              </Link>
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default ServicesDetails;
