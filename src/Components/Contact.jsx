import React from "react";
import User from "./User";
const Contact = () => {
  return (
    <div>
      <h1 className="text-lg font-bold p-4">Contact Us</h1>
      <input className="p-2 mx-2 border border-black" placeholder="Name" />
      <input className="p-2 mx-2 border border-black" placeholder="Message" />
      <button className="p-2 m-2 bg-black text-white rounded-md"> Submit </button>
      <User> </User>
    </div>
   
  );
};

export default Contact;
