import React from "react";
import { ReactiveBase } from "@appbaseio/reactivesearch";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <ReactiveBase
        app="yelp"
        url="https://HKWtP7Tfs:f0670cf8-10d7-419d-919e-313f7e0ea415@yelp-data-zyafzvq-arc.searchbase.io"
      >
        <h1>Connected to elasticsearch</h1>
      </ReactiveBase>
    </div>
  );
}
