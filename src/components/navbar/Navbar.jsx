
// import { Link } from "react-router-dom"
import { useEffect, useState } from "react"
import "./Navbar.scss"

function Navbar() {

  const [active,setActive] = useState(false);
  const [open,setOpen] = useState(false);

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
    <div className={active?"navbar active":'navbar'}>
        <div className="container">
            <div className="logo">
              {/* <Link to="/"> */}
                <span className="text">fiverr</span>
                {/* </Link> */}
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
                      <span>Gigs</span>
                      <span>Add new Gig</span>
                      </>
                     )}
                     <span>Orders</span>
                     <span>Messages</span>
                     <span>Log Out</span>
                  </div>}
                  </div>
                  )}
            </div>
        </div>

      {active && <> <hr></hr>
        <div className="menu">
          <span>test</span>
          <span>test1</span>
        </div></>}
    </div>
  )
}

export default Navbar