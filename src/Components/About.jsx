import { useContext } from "react";
import userContext from "../utils/userContext";

const About = () => {
  const {loggedInUser} = useContext(userContext)
  return (
    <div>
      <h1>About Us</h1>
      <h1 className="font-bold my-4">{loggedInUser}</h1>
      <h2> This is swiggy clone </h2>
    </div>
  );
};

export default About;
