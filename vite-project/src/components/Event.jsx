import React from "react";

const Event = (props) => {
  return (
    <td className={`Event ${props.color}`}>
      <h4>{props.color}</h4>
      <h5>{props.event}</h5>
      <h6>{props.location}</h6>
    </td>
  );
};

export default Event;
