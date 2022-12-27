import React from "react";
import Componentexample from "./Componentexample";
import Propsexample from "./Propsexample";

//One more Component

const Printcomponent = () => {
  const gender = "female";
  return `hello snigdha is a ${gender}`;
};
//Component
const App = () => {
  const firstname = "snigdha";
  const email = "ksnigdha9@gmail.com";

  const user = {
    lastname: "kalipindi",

    contact: "717-802-7509",
  };
  //Regular Function
  function printName(user) {
    return `My email and contact no is ${user.lastname} ${user.contact}`;
  }
  return (
    <section>
      <h1> Hi c my component in index.js file</h1>
      <p>
        {" "}
        Myself {firstname} {printName(user)}
      </p>
      <p>
        {" "}
        <Printcomponent />{" "}
      </p>
      <p>
        {" "}
        <Printcomponent />{" "}
      </p>

      <p>
        {" "}
        <Printcomponent />{" "}
      </p>

      <p>
        {" "}
        <Printcomponent />{" "}
      </p>
      <img src="" alt={email} />

      <Componentexample />
      <Propsexample/>
    </section>
  );
};


// function getData()
// {
//   console.log( arguments);
// }
// getData("raja","kalipindi");


export default App;
