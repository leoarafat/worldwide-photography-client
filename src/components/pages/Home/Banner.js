import React from 'react';

const Banner = () => {
    return (
        <div>
                  <div className="carousel w-full">
        <div id="item1" className="carousel-item w-full">
          <img
            src="https://images.unsplash.com/photo-1558951407-61704cdb0460?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80"
            className="w-full  h-[600px]"
            alt=""
          />
        </div>
        <div id="item2" className="carousel-item w-full">
          <img
            src="https://images.unsplash.com/photo-1533396371595-d46b0aa39bd2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=385&q=80"
            className="w-full  h-[600px]"
            alt=""
          />
        </div>
        <div id="item3" className="carousel-item w-full">
          <img
            src="https://images.unsplash.com/photo-1575380591643-b2c92368dc6d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1162&q=80"
            className="w-full  h-[600px]"
            alt=""
          />
        </div>
        <div id="item4" className="carousel-item w-full">
          <img
            src="https://images.unsplash.com/photo-1569317002804-ab77bcf1bce4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            className="w-full h-[600px]"
            alt=""
          />
        </div>
      </div>
      <div className="flex justify-center w-full py-2 gap-2">
        <a href="#item1" className="btn btn-xs">
          1
        </a>
        <a href="#item2" className="btn btn-xs">
          2
        </a>
        <a href="#item3" className="btn btn-xs">
          3
        </a>
        <a href="#item4" className="btn btn-xs">
          4
        </a>
      </div>
        </div>
    );
};

export default Banner;