import { useContext } from "react";
import userContext from "../utils/userContext";

const About = () => {
  const { loggedInUser } = useContext(userContext);

  return (
    <div className="p-4 font-sans bg-white text-gray-800 self-center max-w-2xl mx-auto shadow-lg rounded-lg mt-8 ">
      <h1 className="text-2xl font-bold mb-2 text-center">About Us</h1>
      <p className="font-bold text-green-600 my-2">
        Logged in as: {loggedInUser}
      </p>

      <p className="my-2">
        GitHub:{" "}
        <a
          href="https://github.com/vijaycham"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 underline hover:text-blue-800"
        >
          github.com/vijaycham
        </a>
      </p>
      <p className="my-2">
        Linkedin:{" "}
        <a
          href="https://www.linkedin.com/in/vijaycham/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 underline hover:text-blue-800"
        >
          https://www.linkedin.com/in/vijaycham/
        </a>
      </p>

      <p className="mt-4">This is a Swiggy clone built using Swiggy's API.</p>
    </div>
  );
};

export default About;
