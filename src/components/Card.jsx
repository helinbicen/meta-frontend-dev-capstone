import Delivery from "../assets/Delivery.svg"

function Card(props) {
  return (
    <div className='card bg-gray'>
        <img src={props.image} alt={props.title} />
        <div className="card-inner">
        <div className='main-info'>
            <h3 className="card-title">{props.title}</h3>
            <p className="card-price text-orange ">{props.price}</p>
        </div>
        <p className="card-description text-dark-gray ">{props.description}</p>
        <div className='order'>
            <p>Order a delivery </p>
            <img src={Delivery} alt="Delivery" />
        </div>
        </div>
       
       
    </div>
  )
}

export default Card