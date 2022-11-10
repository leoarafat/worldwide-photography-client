import React, { useContext, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { userContext } from "../../AuthProvider/AuthContext";

const Update = () => {
  const storedUser = useLoaderData();
  console.log(storedUser)
  
  const [cUser, setUser] = useState(storedUser);
// const [usr, setusr] = useState({})



  const { user } = useContext(userContext);

  
  // console.log(currentUser);

  const handleUpdate = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = user?.email || "Unregistered";
    const photo = form.photoURL.value;
    const feedback = form.feedback.value;

    const userInfo = {
      name,
      email,
      photo,
      feedback,
      // time: new Date(),
    };
    setUser(userInfo);

    fetch(`https://assignment-11-server-iota.vercel.app/feedback/${storedUser._id}`,{
      method: "PUT",
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(cUser)
    })
    .then(res => res.json())
    .then(data =>{
      console.log(data)
      
    })
  };

//   const handleInputChange = event =>{
//     const field = event.target.name;
//     const value = event.target.value;
//     const newUser = {...user}
//     newUser[field] = value;
//     setUser(newUser);
// }

  return (
    <div>
      {storedUser.map((user) => (
        <div>
          <form onSubmit={handleUpdate}>
            <div className="hero min-h-screen bg-base-200">
              <div className="hero-content flex-col lg:flex-row-reverse">
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
                        
                        defaultValue={user.name}
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
                        
                        defaultValue={user.photo}
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
                        
                        defaultValue={user.feedback}
                      ></textarea>
                      <label className="label"></label>
                    </div>
                    <div className="form-control mt-6">
                      <button className="btn btn-primary">Update Review</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      ))}
    </div>
  );
};

export default Update;
