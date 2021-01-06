import React from "react";

const Customers = (props) => {
  return (
    <div>
      <h1>Customers {props.match.params.id}</h1>
    </div>
  );
};

export default Customers;
