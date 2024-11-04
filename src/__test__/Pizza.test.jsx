import { render, cleanup } from "@testing-library/react"
import { afterEach, expect, test } from "vitest"
import Pizza from "../Pizza"

afterEach(cleanup)

test("alt text renders on image", async () => {
  const name = "My favorite pizza"
  const src = "https://picsum.photos/200"
  const description = "Very good pizza"

  const screen = render(
    <Pizza name={name} description={description} image={src} />,
  )

  const img = screen.getByRole("img")
  expect(img.src).toBe(src)
  expect(img.alt).toBe(name)
})

test("to have default image if none is provided", async () => {
  const screen = render(<Pizza name={"Cool Pizza"} description="good pizza" />)

  const img = screen.getByRole("img")
  expect(img.src).not.toBe("")
})
