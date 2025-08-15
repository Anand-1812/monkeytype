import { assets } from "../../assets/assests"
import "./Navbar.css";
import { FaKeyboard } from "react-icons/fa";

function Navbar() {
  return (
    <div className="navbar">
      <div className="leftSide">
        <div className="logo">
          <img src={assets.monkey_type} alt="logo" className="navIcons" />
        </div>
        <FaKeyboard className="navIcons" />
      </div> 
      <div className="rightSide"></div> 
    </div>
  )
}

export default Navbar
