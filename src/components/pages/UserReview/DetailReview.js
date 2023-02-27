import React from "react";
import useTitle from "../../Hooks/useTitle";

const UserReview = ({ review, handleDelete }) => {
  useTitle("userReview");
  // console.log(reviewed);
  const { email, feedback, name, photo, time } = review;
  // console.log(rev)

  return (
    <div>
      <div className="p-[15px] sm:p-12 dark:bg-gray-900 dark:text-gray-100 my-2 rounded w-[400px] mx-auto">
        <div className="flex flex-col space-y-4 md:space-y-0 md:space-x-6 md:flex-row">
          <img
            src={photo}
            alt=""
            className="self-center flex-shrink-0 w-24 h-24 border rounded-full md:justify-self-start dark:bg-gray-500 dark:border-gray-700"
          />
          <div className="flex flex-col">
            <h4 className="text-lg font-semibold text-center md:text-left">
              {name}
            </h4>
            <p className="text-center">{email}</p>

            <p className="dark:text-gray-400 text-center">{feedback}</p>
          </div>
        </div>

        <p className="text-red-600 text-center">
          Date&Time: {new Date(time).toLocaleString()}
        </p>
      </div>
      :
    </div>
  );
};

export default UserReview;
