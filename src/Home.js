import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import './Home.css'
import Puppy from './Puppy'
import PuppyForm from './PuppyForm'

const Home = () => {
  const [feedback, setFeedback] = useState('')

  useEffect(() => {
    // this function runs once when the component first loads
    // pop up an annoying message in the web browser
    alert(
      "hello world from within Home.js!\nPlease open your browser's Developer Tools -> Javascript Console"
    )
    // print it more discretely to the Developer Tools -> Javascript Console
    console.log('hello world from within Home.js!')
  }, []) // the empty array here is what causes this to run only once

  // a function that will be run anytime a user clicks on a puppy article
  // see the code in Puppy.js for how this function is passed the name, breed, and sound of the clicked-on puppy
  const handleClick = (name, breed, sound) => {
    setFeedback(`You clicked on ${name} the ${breed}! ${sound}!`)
    console.log(`You clicked on ${name} the ${breed}! ${sound}!`)
  }

  // an array of puppy data... imagine this is fetched from a back-end server API
  // we hard-code it here so we can focus on React.js, not back-end code
  const puppies = [
    {
      name: 'Spot',
      breed: 'Schnauzer',
      img: `${process.env.PUBLIC_URL}/puppy.jpg`, // a nice way to reference files in the 'public' directory
      sound: 'Woof',
    },
    {
      name: 'Tobik',
      breed: 'German Shepherd',
      img: `${process.env.PUBLIC_URL}/puppy.jpg`, // a nice way to reference files in the 'public' directory
      sound: 'Woof',
    },
    {
      name: 'Fido',
      breed: 'Chihuahua',
      img: `${process.env.PUBLIC_URL}/puppy.jpg`, // a nice way to reference files in the 'public' directory
      sound: 'Growl',
    },
    {
      name: 'Kenny',
      breed: 'Beagle',
      img: `${process.env.PUBLIC_URL}/puppy.jpg`, // a nice way to reference files in the 'public' directory
      sound: 'Meow',
    },
  ]

  return (
    <main className="Home">
      <h1>Hello to the app</h1>
      <p>
        Lorem <Link to="/about">about us</Link> ipsum dolor sit amet foo bar baz
        bum
      </p>
      <PuppyForm /> {/* show the form for adding a new puppy */}
      {feedback && (
        <div>
          <p class="Home-feedback">{feedback}</p>
        </div>
      )}
      <section className="Home-puppies">
        {/*
         * loop through the array of puppy data, and return a component for each object therein
         * note how we pass arguments to the Puppy component, including a function definition.
         */}
        {puppies.map((puppy, i, puppiesArray) => (
          <Puppy
            name={puppy.name}
            breed={puppy.breed}
            puppyImg={puppy.img}
            sound={puppy.sound}
            handleClick={handleClick}
          />
        ))}
      </section>
    </main>
  )
}

export default Home
