import { createRoot } from "react-dom"
import Pizaa from "./Pizza"

const App = () => {
  return (
    <div>
      <h1>Pizza Pi</h1>
      <Pizaa image="/public/pizzas/pepperoni.webp" name="Pepperoni" description="Cheese and pepperoni" />
      <Pizaa image="/public/pizzas/hawaiian.webp" name="hawaiian" description="Cheese and pepperoni" />
    </div>
  )
}

const container = document.getElementById("root")
const root = createRoot(container)
root.render((<App />))
