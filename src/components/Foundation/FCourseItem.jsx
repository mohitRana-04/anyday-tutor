import React from "react";
import Foundation from "./Foundation";
import classes from "./FcourseItem.module.css";
function FCourseItem(props) {
  return (
    <div>
      {/* <br />
      <br />
      <br />
      <br /> */}
      <div className={classes.container}>
        <h1>Prepare with Top Educator</h1>
        <h4>
          Access to India's best Foundation batch educators is just a
          subscription away
        </h4>
        <ul className={classes.list}>
          {props.fcourses.map((curElem) => (
            <Foundation
              key={curElem.id}
              id={curElem.id}
              img={curElem.img}
              name={curElem.name}
              Teacher={curElem.Teacher}
              lang={curElem.lang}
              price={curElem.price}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default FCourseItem;
