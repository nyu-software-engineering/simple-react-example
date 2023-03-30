import "./Puppy.css"

const Puppy = props => {
  // this component expects to receive 'name', 'breed', and 'handleClick' values passed as arguments to it
  // react automatically bundles these arguments into an object called props
  // when a user clicks on the article, it calls the provided callback and passes the name and breed of the clicked-on puppy
  return (
    <article
      className="Puppy"
      onClick={() => {
        props.handleClick(props.name, props.breed)
      }}
    >
      <img className="Puppy-img" src={props.puppyImg} alt="Puppy" />
      <div className="Puppy-details">
        <h1>{props.name}</h1>
        <p>{props.breed}</p>
      </div>
    </article>
  )
}

export default Puppy
