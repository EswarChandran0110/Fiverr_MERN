import { Link } from "react-router-dom"
import "./GigCard.scss"

function GigCard({item}) {
  return (
    <Link to="/gig/123">
    <div className="gigCard">
        <img src={item.img} alt="" />
        <div className="info">
            <div className="user">
                <img src={item.pp} alt="" />
                <span>{item.username}</span>
            </div>
            <p>{item.desc}</p>
            <div className="star">
                <img src="" alt="" />
                <span>{item.star}</span>
            </div>
        </div>
        <div className="details">
            <img src="" alt="" />
            <div className="price">
              <span>Starting at</span>
              <h2>${item.price}</h2>
            </div>           
        </div>
    </div>
    </Link>
  )
}

export default GigCard