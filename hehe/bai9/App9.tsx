import React, { Suspense } from "react";
import LazyLoad from "react-lazyload";
import "./App9.css";

const LazyLoadComp = React.lazy(() => import("./LazyLoadComp"));

function App() {
  return (
    <div className="App">
      <h1>Lazy Loading Example</h1>
      <Suspense fallback={<div className="loading">Loading...</div>}>
        <LazyLoad height={200} offset={100}>
          <LazyLoadComp />
        </LazyLoad>
      </Suspense>
    </div>
  );
}

export default App;
