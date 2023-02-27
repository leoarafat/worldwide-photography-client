import React from "react";
import { RotatingSquare } from "react-loader-spinner";

const Loader = () => {
  return (
    <div>
      <RotatingSquare
        height="150"
        width="150"
        color="#4fa94d"
        ariaLabel="rotating-square-loading"
        strokeWidth="4"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </div>
  );
};

export default Loader;
