// console.log(React);
// console.log(ReactDOM);


var img =  React.createElement("img", {src: "./logo.svg",alt: "my image",width: "100"})

var h21=React.createElement("h2",{id:"h2"},'About me')
var h22=React.createElement("h2",{id:"h2"},'Portfolio')
var h23=React.createElement("h2",{id:"h2"},'Services')
var h24=React.createElement("h2",{id:"h2"},'Blog')

var h25=React.createElement("h2",{id:"h2"},'Book A Call')

var divnav1=React.createElement("div",{id:"nav1"}[img,h21,h23,h24])


var logo = React.createElement("img", {
  src: "./logo.svg",
  alt: "Logo",
  width: "40"
});

var navLinks = [
  "About Me",
  "Portfolio",
  "Services",
  "Blog"
].map(function(text) {
  return React.createElement("a", { href: "#", style: { margin: "0 10px" } }, text);
});

var bookCall = React.createElement(
  "a",
  { href: "#", style: { marginLeft: "auto" } },
  "Book A Call"
);

var nav = React.createElement(
  "div",
  {
    id: "nav",
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "20px 40px"
    }
  },
  [logo].concat(navLinks, [bookCall])
);


var stats = React.createElement(
  "div",
  { id: "stats", style: { display: "flex", gap: "50px", marginBottom: "20px" } },
  [
    React.createElement(
      "div",
      null,
      React.createElement("h3", null, "+200"),
      React.createElement("p", null, "Project completed")
    ),
    React.createElement(
      "div",
      null,
      React.createElement("h3", null, "+50"),
      React.createElement("p", null, "Startup raised")
    )
  ]
);


var hello = React.createElement("h1", { id:"hello", style: { fontSize: "250px", margin: "0",   } }, "Hello");
var subtitle = React.createElement("p", { style: { fontSize: "22px" } }, "-It's D.Nova a design wizard");

var heroLeft = React.createElement(
  "div",
  { style: { flex: "1", padding: "20px" } },
  [stats, hello, subtitle]
);


var profileImg = React.createElement("img", {
  src: "./img.webp",
  alt: "Profile",
  style: { width: "100%", borderRadius: "10px" }
});

var heroRight = React.createElement(
  "div",
  { style: { flex: "1", padding: "20px" } },
  profileImg
);

var hero = React.createElement(
  "div",
  { id: "hero", style: { display: "flex", alignItems: "center", padding: "20px 40px" } },
  [heroLeft, heroRight]
);

var app = React.createElement(
  "div",
  null,
  [nav, hero]
);


var root = ReactDOM.createRoot(document.querySelector("#content"));
root.render(app);
