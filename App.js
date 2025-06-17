const heading = React.createElement("h1", {id: "heading", abc:"xyz"}, "Hello World from React!")


const parent = React.createElement("div", {id :"parent"}, [
    React.createElement("div", {id :"child"},[
       React.createElement("h1",{}, "Child is created via h1!" ),
       React.createElement("h2", {}, "Child is created via h2"),]),

    React.createElement("div", {id :"child2"},[
       React.createElement("h1",{}, "Child is created via h1!" ),
       React.createElement("h2", {}, "Child is created via h2"),]),
    ])


console.log(parent);
const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(parent);

