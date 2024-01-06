import React from "react";
import ReactDOM  from "react-dom/client";
import charger from "../../React/applecharger.jpg";
import Body from "./components/Body";
import Header from "./components/Header";
import About from "./components/About";
import Contact from "./components/Contact";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Error from "./components/error";
import Menu from "./components/Menu";
import Cart from "./components/Cart";
//JSX is converted to React.createElement by Babel, which is then converted (React Element) to JS object.
//render converts it to HTML element

// const content = <h1 id="heading">Namaste React.JS</h1>
/*
React.createElement("div", {id: "parent"}, 
[React.createElement("div", {id: "child1"}, 
[React.createElement("h1", {}, "I am h1 tag"), 
React.createElement("h2", {}, "I am h2 tag")])],
[React.createElement("div", {id: "child2"},
[React.createElement("h1", {}, "I am Kaushik"),
React.createElement("h2", {}, "This is my React")])]);
*/
 const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(content);

// const Reacte = () => {
//     return <h1>"functiontest"</h1>
// }

// root.render(<Reacte />);

// const Test = () => (
//     <h1>"Test"</h1>
// );

// // Component Composition - Component inside a component (Here Test and Innertest).
// const Innertest = () => (
//     <Test />,
//     <h6 id="heading">"Inner Test display"</h6>
// );
// root.render(<Innertest />);

// const Innernewtest = () => (
//   <div>
//     <Test />
//     <div id="heading">"Inner new Test display"</div>
//   </div>
// );
// root.render(<Innernewtest />);

// const reactelement = React.createElement("div", {className: "title"}, [React.createElement("h1", {}, "h1"),React.createElement("h2", {}, "h2"),React.createElement("h3", {}, "h3")]);
// root.render(reactelement);

// const JsxTest = () => (
//   <div className="title">
//     <h1>"h1"</h1>
//     <h2>"h2"</h2>
//     <h3>"h3"</h3>
//   </div>
// );
// root.render(<JsxTest />);

// const header1 = "h1";
// const header2 = "h2";
// const header3 = "h3";


// const jsxTest1 = (
//     <div className="title">
//     <h1>{header1}</h1>
//     <h2>{header2}</h2>
//     <h3>{header3}</h3>
//     </div>
// );
// root.render(jsxTest1);

// const jsxTest2 = (
//     <div className="title">
//         <Innernewtest />
//         <Innernewtest></Innernewtest>
//         {Innernewtest()}
//     <h1>{header1}</h1>
//     <h2>{header2}</h2>
//     <h3>{header3}</h3>
//     </div>
// );
// root.render(jsxTest2);

// const NewAssignment = () => (
//     <header>
//         <img id="apple" src={apple} alt="applelogo"></img>
//         <input id="search" type="text"></input>
//         <img id="ico" src={icon} alt="fav.ico"></img>
//     </header>
// );
// root.render(<NewAssignment />);

/* Header
    - Logo
    - Home
    - About
    - Contact
    - Cart
    - User
   Body
    - Search
    - Cards
     - Name, Rating
*/


const Applayout = () => {
    return(
        <div className="app">
        <Header />
        <Outlet />
        </div>
    );
};
const approuter = createBrowserRouter([
  {
    path: "/",
    element: <Applayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/restaurants/:resId",
        element: <Menu />,
      }
    ],
    errorElement: <Error />,
  }
])
root.render(<RouterProvider router={approuter}/>);