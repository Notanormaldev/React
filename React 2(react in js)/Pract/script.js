// console.log(React);
// console.log(ReactDOM);

// let h1=  React.createElement('h1',null,"Hey i am fromm scriptu")

// var root = ReactDOM.createRoot(document.querySelector("#content"))

// root.render(h1)



// let h1=React.createElement("h1",null,'heyy i am h1')
// let h2=React.createElement("h2",null,'heyy i am h2')


// var content=document.querySelector("#content")
// let div=React.createElement("div",{id:"parent",class:"elem"},[h1,h2])

// var root=ReactDOM.createRoot(content)
// root.render(div);





import main from "./parent.js";
var root=ReactDOM.createRoot(document.querySelector("#content"))
root.render(main);

