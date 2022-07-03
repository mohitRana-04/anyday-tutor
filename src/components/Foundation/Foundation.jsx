import React from "react";
import Card from "../ui/Card";
import classes from "./Foundation.module.css";
function Foundation(props) {
  return (
    <>
      <li>
        <div className={classes.container}>
          <div className={classes.imageContainer}>
            <img
              src="https://images.unsplash.com/photo-1619410283995-43d9134e7656?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZ3JhbW1pbmclMjBsYW5ndWFnZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60"
              alt=""
            />
          </div>

          <div className={classes.lang}>
            <button className={classes.btnLang}>{props.lang}</button>
          </div>
          <div className={classes.titleSection}>
            <h3 className={classes.title}>{props.name}</h3>
          </div>
          <div className={classes.spaceBottom}>
            <div className={classes.bottom}>
              <h4 className={classes.teacher}>{props.Teacher}</h4>
            </div>
            <div className={classes.price}>
              <button className={classes.purchase}> {props.price}/-</button>
            </div>
          </div>
        </div>
      </li>
    </>
  );
}

export default Foundation;
