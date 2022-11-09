import React from "react";

const AddService = () => {
  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    const serviceName = form.serviceName.value;
    const title = form.title.value;
    const img = form.photoURL.value;
    const details = form.details.value;
    const camera = form.camera.value;
    const location = form.location.value;
    const services = {
      Service_name: serviceName,
      title,
      img,
      details,
      camera,
      location

    };
    fetch("http://localhost:5000/addService", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(services),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          alert("review successful");
          form.reset();
        }
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Add service</h1>
            <p className="py-6">If you want then you can add service.</p>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Service Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Service Name"
                  className="input input-bordered"
                  name="serviceName"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Title</span>
                </label>
                <input
                  type="text"
                  placeholder="Title"
                  className="input input-bordered"
                  name="title"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Camera</span>
                </label>
                <input
                  type="text"
                  placeholder="Camera"
                  className="input input-bordered"
                  name="camera"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Location</span>
                </label>
                <input
                  type="text"
                  placeholder="Location"
                  className="input input-bordered"
                  name="location"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Price</span>
                </label>
                <input
                  type="text"
                  placeholder="Price"
                  className="input input-bordered"
                  name="price"
                  required
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
                  <span className="label-text">Description</span>
                </label>
                <textarea
                  className="textarea textarea-bordered h-24"
                  placeholder="Description"
                  name="details"
                  required
                ></textarea>
                <label className="label"></label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Add Service</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default AddService;
