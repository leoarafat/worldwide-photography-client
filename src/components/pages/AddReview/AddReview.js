import React from "react";
import { useLoaderData } from "react-router-dom";

const AddReview = () => {
  // const [feedback, setFeedback] = useState({})
  // const [service] = useLoaderData();
  // console.log(service)
  
  // const { _id, price } = service;
  // console.log(_id,price);


  const handleFeedback = (e) => {
    e.preventDefault();

    const form = e.target;
    const name = form.name.value;
    const photo = form.photoURL.value;
    const feedback = form.feedback.value;
    const review = {
    
      name,
      photo,
      feedback,
    };
    fetch("http://localhost:5000/feedback", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(review),
    })
      .then((res) => res.json())
      .then((data) => {
        if(data.acknowledged){
          alert('review successful')
          form.reset()
        }
      });
  };
  return (
    <div>
      <form onSubmit={handleFeedback}>
        <div className="hero min-h-screen bg-base-200">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <div className="text-center lg:text-left">
              <h1 className="text-5xl font-bold">Please Review!</h1>
              <p className="py-6">
                If you like my photography please leave a review. Thank you.
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
    </div>
  );
};

export default AddReview;
