import './index.css'

const CardItem = props => {
  const {cardDetails} = props
  const {title, description, imgUrl} = cardDetails
  const className = `${cardDetails.className} card`
  return (
    <li className={className}>
      <h1 className="card-heading">{title}</h1>
      <p className="card-description">{description}</p>
      <div className="image-container">
        <img className="image" src={imgUrl} alt={title} />
      </div>
    </li>
  )
}

export default CardItem
