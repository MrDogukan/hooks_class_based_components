import React, { useState } from "react";

const UseStates = () => {
  const [count, setCount] = useState(61);
  const [info, setInfo] = useState({
    name: "Ahmet Yilmaz",
    email: "ay@gmail.com",
    age: 32,
  });

  const handleInc = () => {
    setCount(count + 1);
  };

  const handleDec = () => {
    setCount(count - 1);
  };

  const toZero = () => {
    setCount(0);
  };

  const incAge = () => {
    setInfo(info.age + 1);
  };

  return (
    <div>
      <div>
        <h1 className="dispaly-4 mt-4">USESTATE COUNT : {count}</h1>
        <button onClick={handleInc} className="btn btn-dark">
          Arttır
        </button>
        <button onClick={handleDec} className="btn btn-success">
          Azalt
        </button>
        <button onClick={toZero} className="btn btn-danger">
          Sıfırla
        </button>
      </div>
      <section>
        <h1 className="display-4 text-danger m-4">USESTATE OBJECT</h1>
        <h2>{info.name}</h2>
        <h3>{info.email}</h3>
        <h3>{info.age}</h3>
        <button onClick={incAge} className="btn btn-info">
          inc age
        </button>
      </section>
    </div>
  );
};

export default UseStates;
