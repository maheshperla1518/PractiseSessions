import React from "react";
import ReactDOM from "react-dom/client";


// var heading = React.createElement(
//   "h2",
//   { id: "heading" },
//   "Hello world from React 🚀"
// );
// var root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);

{
  /* 
    <div id="parent">
        <div id="child">
            <h2>im am h2 tag from nested elements</h2>
        </div>
    </div>

*/
}

// var nestedElements = React.createElement("div", { id: "parent" }, [
//   React.createElement("div", { id: "child1" }, [
//     React.createElement("h1", { id: "h1tag" }, "H1 tag from nested elements"),
//     React.createElement("h2", { id: "h2tag" }, "H2 tag from nested elements"),
//   ]),
//   React.createElement("div", { id: "child2" }, [
//     React.createElement("h1", { id: "h1tag" }, "H1 tag from nested elements"),
//     React.createElement("h2", { id: "h2tag" }, "H2 tag from nested elements"),
//   ]),
// ]);
// var root2 = ReactDOM.createRoot(document.getElementById("root2"));
// root2.render(nestedElements);

//React element
//React element ---> object ---> HTML element(render)
var h4_tag = React.createElement(
  "h4",
  { id: "heading4" },
  "this is a heading tag(h4)😒"
);
//JSX---->its html like syntax
//react element
var jsxheading = <h1 id="heading">Namaste React using JSX⭐</h1>

var root = ReactDOM.createRoot(document.getElementById("root3"));
// root.render(h4_tag);
// root.render(jsxheading);


//craete a jsx element in multiple lines;

var Jsxh3tag = ()=> (<h3 className="haeding3"
  >this is jsx coomponent 🤖
</h3>);
var root = ReactDOM.createRoot(document.getElementById("root4"));
//root.render(jsx_h3tag);


//React functional componenet
//component composition
var Headingcomponenet = () =>(
    <div>
      {/* react/jsx inside react component */}
      {jsxheading}
      {100+15}
      <h1 className="head5">this is react componenet 🤦‍♂️</h1>
      <Jsxh3tag/>

       {/* the below 3 types are same */}
       {/* {Jsxh3tag()}
      <Jsxh3tag/>
      <Jsxh3tag></Jsxh3tag> */}

    </div>
);
var root = ReactDOM.createRoot(document.getElementById('root5'));
root.render(<Headingcomponenet/>);

