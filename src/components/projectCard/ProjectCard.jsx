import { Link } from "react-router-dom"
import "./ProjectCard.scss"



function ProjectCard({item}) {
  return (
    <Link to="/">
    <div className="projectCard">
        <img src={item.img} alt="" />
        <div className="info">
            <img src={item.pp} alt="" />
            <div className="texts">
                <h1>{item.cat}</h1>
                <span>{item.username}</span>
            </div>
        </div>
    </div>
    </Link>
  )
}

export default ProjectCard