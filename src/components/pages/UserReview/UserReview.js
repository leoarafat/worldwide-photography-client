import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { userContext } from "../../AuthProvider/AuthContext";
import DetailReview from "./DetailReview";

const UserReview = () => {
  const { user } = useContext(userContext);

  const [review, setReview] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/feedback?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setReview(data);
        console.log(data);
      });
  }, [user?.email]);
  // const handleDelete = (id) => {
  //   const agree = window.confirm("Are you sure to delete this item?");
  //   if (agree) {
  //     fetch(`http://localhost:5000/feedback/${id}`, {
  //       method: "DELETE",
  //     })
  //       .then((res) => res.json())
  //       .then((data) => {
  //         console.log(data);
  //         if (data.deletedCount > 0) {
  //           alert("deleted successfully");
  //           const remaining = review.filter((rev) => rev._id !== id);
  //           setReview(remaining);
  //         }
  //       });
  //   }
  // };

  const handleUpdate = (user) => {

  };

  return (
    <div>
      {/* {review.map((review) => (
        <DetailReview handleDelete={handleDelete} handleUpdate={handleUpdate} rev={review} />
      ))} */}
    </div>
  );
};

export default UserReview;
