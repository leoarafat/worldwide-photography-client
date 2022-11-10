// import React, { useContext, useEffect, useState } from "react";
// import { Link, useLoaderData, useLocation, useNavigate } from "react-router-dom";
// import { userContext } from "../../AuthProvider/AuthContext";
// import useTitle from "../../Hooks/useTitle";
// import toast from "react-hot-toast";
// const AddReview = () => {
//   const { user } = useContext(userContext);
//   // const [feedback, setFeedback] = useState([]);
//   // const [time, setTime] = useState([]);
//   // console.log(blur)
  
//   const { _id } = useLoaderData();
//   useTitle('addReview')
  


//   // useEffect(() => {
//   //   fetch(`https://assignment-11-server-iota.vercel.app/feedback?email=${user?.email}`,{
//   //     headers:{
//   //       authorization: `Bearer ${localStorage.getItem('token')}`
//   //     }
//   //   })
//   //     .then((res) => res.json())
//   //     .then((data) => {
//   //       setFeedback(data);
//   //     });
//   // }, [user?.email]);


//   // const handleFeedback = (e) => {
//   //   e.preventDefault();

//   //   const form = e.target;
//   //   const name = form.name.value;
//   //   const email = user?.email || "Unregistered";
//   //   const photo = form.photoURL.value;
//   //   const feedback = form.feedback.value;
//   //   const review = {
//   //     service: _id,
//   //     email,
//   //     name,
//   //     time: new Date(),
//   //     photo,
//   //     feedback,
//   //   };
//   //   fetch("https://assignment-11-server-iota.vercel.app/feedback", {
//   //     method: "POST",
//   //     headers: {
//   //       "content-type": "application/json",
         
//   //     },
//   //     body: JSON.stringify(review),
//   //   })
//   //     .then((res) => res.json())
//   //     .then((data) => {
//   //       if (data.acknowledged) {
//   //         toast.success('Reviewed!')
//   //         form.reset();
         
//   //       }
//   //     });
//   // };
//   return (
//     <div>
//       {/* <form onSubmit={handleFeedback}>
//         <div className="hero min-h-screen bg-base-200">
//           <div className="hero-content flex-col lg:flex-row-reverse">
//             <div className="text-center lg:text-left">
//               <h1 className="text-5xl font-bold">Please Review!</h1>
//               <p className="py-6">
//                 If you like my photography please leave a review. Thank you.
//               </p>
//             </div>
//             <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
//               <div className="card-body">
//                 <div className="form-control">
//                   <label className="label">
//                     <span className="label-text">Name</span>
//                   </label>
//                   <input
//                     type="text"
//                     placeholder="Your name"
//                     className="input input-bordered"
//                     name="name"
//                     required
//                   />
//                 </div>
//                 <div className="form-control">
//                   <label className="label">
//                     <span className="label-text">Email</span>
//                   </label>
//                   <input
//                     type="email"
//                     placeholder="Your email"
//                     className="input input-bordered"
//                     name="email"
//                     defaultValue={user?.email}
//                     required
//                     readOnly
//                   />
//                 </div>
//                 <div className="form-control">
//                   <label className="label">
//                     <span className="label-text">Photo</span>
//                   </label>
//                   <input
//                     type="text"
//                     placeholder="PhotoURL"
//                     className="input input-bordered"
//                     name="photoURL"
//                     required
//                   />
//                 </div>

//                 <div className="form-control">
//                   <label className="label">
//                     <span className="label-text">Feedback</span>
//                   </label>
//                   <textarea
//                     className="textarea textarea-bordered h-24"
//                     placeholder="Leave a feedback"
//                     name="feedback"
//                     required
//                   ></textarea>
//                   <label className="label"></label>
//                 </div>
//                 <div className="form-control mt-6">
//                   <button className="btn btn-primary">Submit</button>
//                   <Link className="text-center" to={`/services/${_id}`}>
//                   <button className="btn btn-ghost">Get Back</button>
//                   </Link>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </form> */}
//     </div>
//   );
// };

// export default AddReview;
