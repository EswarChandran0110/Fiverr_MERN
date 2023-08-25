
import { Link, useLocation } from "react-router-dom"
import { useEffect, useState } from "react"
import "./Navbar.scss"

function Navbar() {

  const [active,setActive] = useState(false);
  const [open,setOpen] = useState(false);

  const {pathname} = useLocation();

  const isActive = ()=>{
     window.scrollY > 0 ? setActive(true) : setActive(false);
  }

  useEffect(()=>{
    window.addEventListener('scroll',isActive);

    return () =>{
      window.removeEventListener('scroll',isActive);
    }
  },[])

  const currentUser = {
    id:1,
    username: "john doe",
    isSeller: true,
  }

  return (
    <div className={active || pathname !=="/"? "navbar active" :"navbar"}>
        <div className="container">
            <div className="logo">
              <Link to="/" className="link">
                <span className="text">fiverr</span>
                </Link>
                <span className="dot">.</span>
            </div>
            <div className="links">
                <span>Fiverr Business</span>
                <span>Explore</span>
                <span>English</span>
                {!currentUser?.username&&<span>Sign in</span>}
                {!currentUser?.isSeller&&<span>Become a seller</span>}
                {!currentUser.username&&<button>Join</button>}
                {currentUser && (
                <div className="user" onClick={()=>(setOpen(!open))}>
                  <img src="https://images.pexels.com/photos/1115697/pexels-photo-1115697.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
                  <span>{currentUser.username}</span>
                 {open&& <div className="options">
                     {currentUser?.isSeller &&(
                      <>
                      <Link to="/mygigs" className="link">Gigs</Link>
                      <Link to="/add" className="link">Add new Gig</Link>
                      </>
                     )}
                     <Link to="/orders" className="link">Orders</Link>
                     <Link to="/messages" className="link">Messages</Link>
                     <Link to="/" className="link">Log Out</Link>
                  </div>}
                  </div>
                  )}
            </div>
        </div>

      {(active || pathname !=="/") && <> <hr></hr>
        <div className="menu">
        <Link className="link menuLink" to="/">
              Graphics & Design
            </Link>
            <Link className="link menuLink" to="/">
              Video & Animation
            </Link>
            <Link className="link menuLink" to="/">
              Writing & Translation
            </Link>
            <Link className="link menuLink" to="/">
              AI Services
            </Link>
            <Link className="link menuLink" to="/">
              Digital Marketing
            </Link>
            <Link className="link menuLink" to="/">
              Music & Audio
            </Link>
            <Link className="link menuLink" to="/">
              Programming & Tech
            </Link>
            <Link className="link menuLink" to="/">
              Business
            </Link>
            <Link className="link menuLink" to="/">
              Lifestyle
            </Link>
        </div>
        <hr/>
        </>}
    </div>
  )
}

export default Navbar