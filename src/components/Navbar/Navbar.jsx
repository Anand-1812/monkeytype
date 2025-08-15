import { assets } from "../../assets/assests"
import "./Navbar.css";

function Navbar() {
  return (
    <div className="navbar">
      <div className="leftSide">
        <div className="logo">
          <img src={assets.monkey_type} alt="logo" className="logo" />
        </div>
        <div className="title">
          <h1>monkeytype</h1>
        </div>
      </div> 
      <div className="rightSide"></div> 
    </div>
  )
}

export default Navbar
