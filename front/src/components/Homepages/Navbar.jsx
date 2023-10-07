import './Navbar.css'
import {Link, NavLink} from 'react-router-dom'
import Image from '../../images/image.jpg'
import { useState } from 'react'





const Navbar = () => {

    const [toggle, setToggle] = useState(false)

    const actToggle = () =>{
        setToggle(!toggle)
    }

    const closeNavbar = () =>{
        if(toggle === true){
            setToggle(false)
        }
    }
    return (
    <div  className="nav-container">
        <nav>
            <div className="logoBtn">
                <Link to='/'> <img  src={Image}  alt="" /> </Link>
                <div className="btn" onClick={actToggle}>
                    <div className={toggle? "bar1 animateBar" : "bar bar1"}></div>
                    <div className={toggle? "bar2 animateBar" : "bar bar2"}></div>
                    <div className={toggle? "bar3 animateBar" : " bar3 "}></div>
                </div>
            </div>

            <div className="links-container ">
                <ul className={toggle? "new-links links" : "links " } onClick={closeNavbar}>
                    <li><Link to= "/">Home</Link></li>
                    <li><Link to= "/">About</Link></li>
                    <li><Link to= "/">Education</Link></li>
                    <li><Link to= "/">Experience</Link></li>
                    <li><Link to= "/">Project</Link></li>
                    <li><Link to= "/">Contact</Link></li>
                    {/* <li><Link to= "/">Admin</Link></li> */}
                </ul>
            </div>
        </nav>
    </div>
    )
}

export default Navbar
