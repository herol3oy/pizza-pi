import { useContext } from "react"
import { CartContext } from "./contexts"
import { Link } from "@tanstack/react-router"

export default function Header() {
  const [cart] = useContext(CartContext)

  return (
    <nav>
      <Link to={"/"}>
        <h1
          style={{
            borderBottom: "1px solid #ccc",
            fontFamily: "Pacifico, cursive, sans-serif",
            width: "100%",
            height: "110px",
            paddingBottom: "20px",
            paddingTop: "20px",
            textAlign: "center",
            color: "#da2f04",
          }}
        >
          Pizza Pi
        </h1>
      </Link>
      <div className="nav-cart">
        🛒<span className="nav-cart-number">{cart.length}</span>
      </div>
    </nav>
  )
}
