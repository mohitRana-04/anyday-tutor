import React from "react";
import Foundation from "./Foundation";
import classes from "./FcourseItem.module.css";
function FCourseItem(props) {
  return (
    <div>
      <ul className={classes.list}>
        {props.fcourses.map((curElem) => (
          <Foundation
            key={curElem.id}
            id={curElem.id}
            img={curElem.img}
            name={curElem.name}
            teacher={curElem.teacher}
            lang={curElem.lang}
            price={curElem.price}
          />
        ))}
      </ul>
    </div>
  );
}

export default FCourseItem;
