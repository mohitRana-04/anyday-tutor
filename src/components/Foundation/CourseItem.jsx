import React, { useState, useEffect } from "react";
import FCourseItem from "./FCourseItem";

function CourseItem() {
  const [fcourses, setFcourse] = useState([]);
  const getCourses = async () => {
    const response = await fetch(
      "https://raw.githubusercontent.com/mohitRana-04/anyday-tutor/main/FoundationApi.json"
    );
    // console.log(response);

    setFcourse(await response.json());
  };

  //   dependencies array for just one time runnign this useEffect hook
  useEffect(() => {
    getCourses();
  }, []);

  return (
    <div>
      <FCourseItem fcourses={fcourses} />
    </div>
  );
}

export default CourseItem;
