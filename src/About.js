import { Link } from "react-router-dom"
import "./About.css"
import puppyImage from "./puppy.jpg"

const About = props => {
  return (
    <main className="Home">
      <h1>About this app</h1>
      <p>This app is a simple example of using core features of React.js.</p>
      <p>
        {/* link to different route using `Link` component */}
        {/* link to external site using `a` component */}
        Return to the <Link to="/">home screen</Link> or the code{" "}
        <a href="https://github.com/nyu-software-engineering/simple-react-example">
          on GitHub
        </a>
      </p>
      <img src={puppyImage} alt="Puppies puppies!" />
    </main>
  )
}

export default About
