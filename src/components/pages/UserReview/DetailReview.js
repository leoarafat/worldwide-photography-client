import React from "react";
import { TrashIcon, AdjustmentsHorizontalIcon } from "@heroicons/react/24/solid";
import useTitle from "../../Hooks/useTitle";
import { Link } from "react-router-dom";

const DetailReview = ({ review, handleDelete, serviceName }) => {
  const { _id, feedback, photo, name, service, email, time } = review;
  useTitle('user_review')

  return (
    <div className="p-[15px] sm:p-12 dark:bg-gray-900 dark:text-gray-100 my-2 rounded w-[400px] mx-auto">
      <div className="flex flex-col justify-center items-center">
        <p className="text-center">Service Name: {serviceName}</p>
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
      <div className="flex justify-between my-3">
        <p onClick={() => handleDelete(_id)}>
          <TrashIcon className="w-6 h-6 text-red-500" />
        </p>

        <Link to={`/update/${service}`}>
            <button>
            <AdjustmentsHorizontalIcon  className="w-6 h-6 text-green-300" />
            </button>
          </Link>
      </div>
      <p className="text-center text-red-600">Time: {new Date(time).toLocaleTimeString()}</p>
    </div>
  );
};

export default DetailReview;
