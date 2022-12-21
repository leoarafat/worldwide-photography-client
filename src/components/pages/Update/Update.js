import React, { useContext, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { userContext } from "../../AuthProvider/AuthContext";

const Update = () => {
  const storedUser = useLoaderData();
  console.log(storedUser)
  
  // const [cUser, setUser] = useState();

// console.log(cUser)


  // const { user } = useContext(userContext);

  
  // console.log(currentUser);

  const [text,setText] = useState('')

  const handleUpdate = (e) => {
    e.preventDefault();

    console.log(text)
    // 
    // // fetch(`https://assignment-11-server-iota.vercel.app/feedback/${storedUser._id}`,{
      // method: "PUT",
      // headers: {
        // 'content-type': 'application/json'
      // },
      // body: JSON.stringify(cUser)
    // })
    // .then(res => res.json())
    // .then(data =>{
      // console.log(data)
      // 
    // })
  };


  return (
    <div>
      
        <div>
          <form onSubmit={handleUpdate}>
            <textarea name="text" onBlur={(e) => setText(e.target.value)} id="" cols="30" rows="10"></textarea>
            <button className="btn btn-ghost" type="submit">Update</button>
          </form>
        </div>
  
    </div>
  );
};

export default Update;



