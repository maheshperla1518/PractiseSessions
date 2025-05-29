import React from "react";
import ReactDOM from "react-dom/client";

var heading = React.createElement(
  "h2",
  { id: "heading" },
  "Hello world from React 🚀"
);
var root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);

{
  /* 
    <div id="parent">
        <div id="child">
            <h2>im am h2 tag from nested elements</h2>
        </div>
    </div>

*/
}

var nestedElements = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child1" }, [
    React.createElement("h1", { id: "h1tag" }, "H1 tag from nested elements"),
    React.createElement("h2", { id: "h2tag" }, "H2 tag from nested elements"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", { id: "h1tag" }, "H1 tag from nested elements"),
    React.createElement("h2", { id: "h2tag" }, "H2 tag from nested elements"),
  ]),
]);
var root2 = ReactDOM.createRoot(document.getElementById("root2"));
root2.render(nestedElements);






