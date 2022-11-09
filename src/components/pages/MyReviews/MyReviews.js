import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import useTitle from "../../Hooks/useTitle";
import UserReview from "../UserReview/UserReview";

const MyReviews = () => {
    useTitle('review')
  const [review, setReview] = useState([]);
  const serviceReview = useLoaderData();
  // const {_id} = serviceReview[0]
  // console.log(_id)

  // useEffect(() => {
  //     fetch(`http://localhost:5000/feedback/${_id}`)
  //       .then((res) => res.json())
  //       .then((data) => {
  //         console.log(data);
  //         setReview(data);
  //       });
  //   }, [_id]);

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
            const remaining = review.filter((rev) => rev._id !== id);
            setReview(remaining);
          }
        });
    }
  };
  return (
    <div>
      {serviceReview.length > 0 ? (
        serviceReview.map((review) => (
          <UserReview handleDelete={handleDelete} reviewed={review} />
        ))
      ) : (
        <div className="flex flex-col justify-center items-center">
          <p className="text-center text-5xl text-red-800 my-2">
            No reviews were added
          </p>
          <progress className="progress w-56"></progress>
        </div>
      )}
    </div>
  );
};

export default MyReviews;
