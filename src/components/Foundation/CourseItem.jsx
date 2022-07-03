import React, { useState, useEffect } from "react";
import FCourseItem from "./FCourseItem";

function CourseItem() {
  const [fcourses, setFcourse] = useState([]);
  const [loading, setLoading] = useState(false);

  const getCourses = async () => {
    setLoading(true);
    const response = await fetch(
      "https://raw.githubusercontent.com/mohitRana-04/anyday-tutor/main/FoundationApi.json"
    );
    // console.log(response);

    setFcourse(await response.json());
    setLoading(false);
  };

  //   dependencies array for just one time runnign this useEffect hook
  useEffect(() => {
    getCourses();
  }, []);

  if (loading) {
    return <h2>Loading....</h2>;
  }

  return (
    <div>
      <FCourseItem fcourses={fcourses} />
    </div>
  );
}

export default CourseItem;
