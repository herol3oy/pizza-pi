import React from "react"
import { createRoot } from "react-dom"

const Pizza = (props) => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, props.name),
    React.createElement("p", {}, props.description),
  ])
}

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "List of pizza"),
    React.createElement(Pizza, {
      name: "pepperoni",
      description: "it's a very good pizza",
    }),

    React.createElement(Pizza, {
      name: "vova",
      description: "it's a ",
    }),
  ])
}

const container = document.getElementById("root")
const root = createRoot(container)
root.render(React.createElement(App))
