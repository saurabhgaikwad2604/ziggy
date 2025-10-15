/**
 * 
 * 
 * <div id="parent">
 *      <div id="child1"> 
 *          <h1>The H1 Tag!</h1>
 *          <h2>The H2 Tag!</h2>
 *      </div>
 *      <div id="child2"> 
 *          <h1>The H1 Tag!</h1>
 *          <h2>The H2 Tag!</h2>
 *      </div>
 * </div>
 * 
 * 
 * 
 */

const parent = React.createElement("div", { id: "parent" },
    [
        React.createElement("div", { id: "child1" },
            [
                React.createElement("h1", {}, "The H1 Tag!"),
                React.createElement("h2", {}, "The H2 Tag!")
            ]),
        React.createElement("div", { id: "child2" },
            [
                React.createElement("h1", {}, "The H1 Tag!"),
                React.createElement("h2", {}, "The H2 Tag!")
            ])
    ]
);

const heading = React.createElement("h1", { id: "heading" }, "Hello World!");

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);