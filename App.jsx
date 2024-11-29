import React from "react";
import ReactDOM from "react-dom/client";

//React.createElemet => object => HTMLElement(render)
const parent = React.createElement("h1", {}, "Changed parcel to vite");
console.log(parent);
//JSX - (transpiled before it reaches the JS) - Vite - ES build
const jsxHeading = <h1 id="heading"> Namaste React Using JSX🚀</h1>;
console.log(jsxHeading);

//React component
// Class Based component
// Functional Component
// const HeadingComponent = () => {
//     return <h1>Functional component </h1>
// }
const Title = () => <h1 className="Head" tabIndex="5">Title</h1>
const HeadingComponent = () => (
  <div id="container">
    <Title/>  {/* component inside component*/} 
    {parent}  {/*Element */}
    <h1 className="heading">Functionanl component </h1>
  </div>
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);
