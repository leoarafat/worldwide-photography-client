import React, { useContext, useEffect, useState } from "react";

import { userContext } from "../../AuthProvider/AuthContext";
import useTitle from "../../Hooks/useTitle";
import UserReview from "../UserReview/UserReview";
import toast from "react-hot-toast";
import Loader from "../../Loading/Loader";

const MyReviews = () => {
  useTitle("review");

  const [reviewed, setReviewed] = useState([]);
  const { user } = useContext(userContext);

  useEffect(() => {
    fetch(
      `https://assignment-11-server-iota.vercel.app/feedback?email=${user?.email}`,
      {
        headers: {
          authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        setReviewed(data);
      });
  }, [user?.email]);

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
            const remaining = reviewed.filter((rev) => rev._id !== id);
            setReviewed(remaining);
          }
        });
    }
  };

  return (
    <div className="">
      {reviewed.length > 0 ? (
        reviewed.map((review) => (
          <UserReview handleDelete={handleDelete} rev={review} />
        ))
      ) : (
        <div className="flex flex-col justify-center items-center">
          <p className="text-center text-5xl text-red-800 my-2">
            No reviews were added
          </p>
          <Loader/>
        </div>
      )}
    </div>
  );
};

export default MyReviews;
