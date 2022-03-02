import logo from "./logo.svg"
import "./App.css"
import Puppy from "./Puppy"
import PuppyForm from "./PuppyForm"
import { useEffect } from "react"

const App = () => {
  // run this function when the component first loads
  useEffect(() => {
    // pop up an annoying message in the web browser
    alert(
      "hello world from within App.js!\nPlease open your browser's Developer Tools -> Javascript Console"
    )
    // print it more discretely to the Developer Tools -> Javascript Console
    console.log("hello world from within App.js!")
  }, [])

  // a function that will be run anytime a user clicks on a puppy article
  const handleClick = e => {
    alert("You clicked a puppy!")
    console.log("You clicked a puppy!")
  }

  const puppies = [
    {
      name: "Spot",
      breed: "Schnauzer",
    },
    {
      name: "Tobik",
      breed: "German Shepherd",
    },
    {
      name: "Fido",
      breed: "Chihuahua",
    },
    {
      name: "Kenny",
      breed: "Beagle",
    },
  ]

  return (
    <main className="App">
      <h1>Hello to the app</h1>
      <p>Lorem ipsum dolor sit amet foo bar baz bum</p>

      <PuppyForm />

      {puppies.map((puppy, i, puppyArray) => (
        <Puppy
          name={puppy.name}
          breed={puppy.breed}
          handleClick={handleClick}
        />
      ))}
    </main>
  )
}

export default App
