// Hello World using JavaScript
    const heading1 = document.createElement("h1");
    heading1.innerHTML = "Hello World from JavaScript!";

    const root1 = document.getElementById("root1");
    root1.appendChild(heading1);


// Hello World using React

    const heading2 = React.createElement("h1", {}, "Hello World from React! 1");
    const root2 = ReactDOM.createRoot(document.getElementById("root1"));
    root2.render(heading2);

    const heading3 = React.createElement("h1", {id:"heading3"}, "Hello World from React! 2");
    const root3 = ReactDOM.createRoot(document.getElementById("root3"));
    root3.render(heading3);
    console.log(heading3);


    const parent1 = React.createElement("div", {id:"parent"}, 
                        React.createElement("div", {id:"child"}, 
                            React.createElement("h1", {id:"hd"}, "I'm a h1 tag")));
    const root4 = ReactDOM.createRoot(document.getElementById("root4"));
    root4.render(parent1);


    const parent2 = React.createElement("div", {id:"parent"}, 
                        React.createElement("div", {id:"child"}, 
                            [React.createElement("h1", {id:"hd1"}, "I'm a h1 tag"), 
                            React.createElement("h2", {id:"hd2"}, "I'm a h2 tag")]
                        )
                    );
    const root5 = ReactDOM.createRoot(document.getElementById("root5"));
    root5.render(parent2);


    const parent3 = React.createElement("div", {id:"parent"}, 
                        [React.createElement("div", {id:"child1"}, 
                            [React.createElement("h1", {id:"hd1"}, "I'm a h1 tag"), 
                            React.createElement("h2", {id:"hd2"}, "I'm a h2 tag")]
                        ), 
                        React.createElement("div", {id:"child2"}, 
                            [React.createElement("h1", {id:"hd1"}, "I'm a h1 tag"), 
                            React.createElement("h2", {id:"hd2"}, "I'm a h2 tag")]
                        )]
                    );
    const root6 = ReactDOM.createRoot(document.getElementById("root6"));
    root6.render(parent3);