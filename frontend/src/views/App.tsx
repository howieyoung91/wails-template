import { useEffect, useState } from "react"
import { Button } from "@nextui-org/react"

export default function App() {
  let [content, setContent] = useState(``)

  return (
    <div id="App" className="w-full h-full flex justify-center items-center">
      Hello world!
    </div>
  )
}
