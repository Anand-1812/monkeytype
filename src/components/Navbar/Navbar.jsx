import { assets } from "../../assets/assests"
import "./Navbar.css";
import { FaKeyboard } from "react-icons/fa";
import { FaCrown } from "react-icons/fa6";
import { TbCandle } from "react-icons/tb";
import { IoMdSettings } from "react-icons/io";

function Navbar() {
  return (
    <div className="navbar">
      <div className="nav">
        <div className="logo">
          <img src={assets.monkey_type} alt="logo" className="navIcons" />
        </div>
        <div className="title">
          <div className="one">monkey see</div>
          <div className="two">monkeytype</div>
        </div>
        <nav className="nav">
          <FaKeyboard className="navIcons" />
          <FaCrown className="navIcons" />
          <TbCandle className="navIcons" />
          <IoMdSettings className="navIcons" />
        </nav>
      </div>
    </div>
  )
}

export default Navbar
