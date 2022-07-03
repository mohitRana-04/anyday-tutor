import React from "react";
import Card from "../ui/Card";
function Foundation(props) {
  return (
    <>
      <li>
        <Card>
          <div>
            <img src={props.img} alt="" />
          </div>
          <div>
            <h3>{props.name}</h3>
            <h3>{props.teacher}</h3>
            <p>{props.lang}</p>
          </div>
          <div>
            <button>{props.price}</button>
          </div>
        </Card>
      </li>
    </>
  );
}

export default Foundation;
