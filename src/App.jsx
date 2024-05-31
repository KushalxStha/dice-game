import { useState } from "react"
import Home from "./components/Home"
import GamePlay from "./components/GamePlay";

function App() {
  const [isGameStarted, setIsGameStarted]=useState(false);

  const toggleGamePlay=()=>{
    setIsGameStarted((prev)=> !prev);
  }
  return (
    <>
    {(isGameStarted)?<GamePlay/>:<Home toggle={toggleGamePlay}/>}
    </>
  )
}

export default App