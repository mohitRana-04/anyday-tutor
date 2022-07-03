import CourseItem from "../src/components/Foundation/CourseItem.jsx";
import Slider from "./components/Slider";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./Header";
import Demo1 from "./Demo1";
import Demo2 from "./Demo2";
import Checkout from "./Checkout";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header />
                <Slider />
                <CourseItem />
              </>
            }
          />

          <Route
            path="/demo1"
            element={
              <>
                <Header />
                <Demo1 />
              </>
            }
          />
          <Route
            path="/demo2"
            element={
              <>
                <Header />
                <Demo2 />
              </>
            }
          />
          <Route
            path="/checkout"
            element={
              <>
                <Header />
                <Checkout />
              </>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
