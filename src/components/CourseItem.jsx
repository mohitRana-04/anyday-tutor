import React, { useEffect } from "react";

function CourseItem() {
  const getCourses = async () => {
    const response = await fetch(
      "https://raw.githubusercontent.com/Rachit-veronica/api/master/data_home.json"
    );
    // console.log(response);

    const data = await response.json();
    console.log(data);
  };

  //   dependencies array for just one time runnign this useEffect hook
  useEffect(() => {
    getCourses();
  }, []);
  return <div>CourseItem</div>;
}

export default CourseItem;
