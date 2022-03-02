import puppyImage from "./puppy.jpg"
import "./Puppy.css"

const Puppy = props => {
  return (
    <article className="Puppy" onClick={props.handleClick}>
      <img src={puppyImage} alt="Puppy" />
      <h1>{props.name}</h1>
      <p>{props.breed}</p>
    </article>
  )
}

export default Puppy
