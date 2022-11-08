import React, { useEffect, useState } from "react";
import { TrashIcon, DocumentChartBarIcon } from "@heroicons/react/24/solid";

const DetailReview = ({ review }) => {
  const { _id, feedback, photo, name, service, email } = review;
//   const [review, setReview] = useState([]);

//   useEffect(() => {
//     fetch(`http://localhost:5000/allService/${service}`)
//       .then((res) => res.json())
//       .then((data) => {
//         setReview(data);
//         console.log(data);
//       });
//   }, [service]);




  

  return (
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
      <div className="flex justify-between my-3">
        <p >
          <TrashIcon className="w-6 h-6 text-red-500" />
        </p>

        <p>
          <DocumentChartBarIcon className="w-6 h-6 text-green-300" />
        </p>
      </div>
    </div>
  );
};

export default DetailReview;
// onClick={()=>handleDelete(_id)}
// onClick={()=>handleUpdate(rev)}