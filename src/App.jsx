import { useState } from "react"
import { createRoot } from "react-dom/client"
import Order from "./Order"
import Header from "./Header"
import PizzaOfTheDay from "./PizzaOfTheDay"
import { CartContext } from "./contexts"

const App = () => {
  const cartHook = useState([])

  return (
    <CartContext.Provider value={cartHook}>
      <Header />
      <Order />
      <PizzaOfTheDay />
    </CartContext.Provider>
  )
}

const container = document.getElementById("root")
const root = createRoot(container)
root.render(<App />)
