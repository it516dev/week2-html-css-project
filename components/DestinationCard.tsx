type DestionationCardProps ={
    city: string;
    description: string;
}

const DestinationCard = ({city, description}: DestionationCardProps) => {
  return (
    <article className="destination-card">
        <h3>{city}</h3>
        <p>{description}</p>
    </article>
  )
}

export default DestinationCard