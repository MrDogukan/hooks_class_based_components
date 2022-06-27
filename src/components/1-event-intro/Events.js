import React, { useState } from "react";

const Events = () => {
  const [info, setInfo] = useState("EVENTS");
  const handleClick = () => {
    alert("Button Clicked");
  };

  const handleClear = (text) => {
    alert(text);
  };
  const handleChange = () => {
    setInfo("Clicked Events");
  };
  return (
    <div className=" mt-4">
      <h1 className="display-4 m-4">{info}</h1>
      <button onClick={handleClick} className="btn btn-warning ">
        Tıkla Bro
      </button>
      <button
        onClick={() => handleClear("Clear Button Clicked")}
        className="btn btn-success"
      >
        Clear
      </button>
      <button onClick={handleChange} className="btn btn-danger">
        Change
      </button>
    </div>
  );
};

export default Events;
