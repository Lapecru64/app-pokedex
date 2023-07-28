import { useSelector } from "react-redux"

const HomePage = () => {

  const trainer = useSelector( reducer => reducer.trainer)

  return (
    <div>
      <h1>Pokedex</h1>
      <h2>Hi Trainer</h2>
      <p>To start wirh the app, give me your name trainer </p>
      <form>
        <input type="text" />
        <button>Gotta catch'em all!</button>
      </form>
      </div>
  )
}

export default HomePage
