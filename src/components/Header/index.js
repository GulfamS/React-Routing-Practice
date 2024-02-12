import {Link} from 'react-router-dom'
import './index.css'

const Header = () => (
  <nav className="header-card">
    <div className="logo-and-title-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/wave-logo-img.png"
        alt="wave"
        className="logo-icon"
      />
      <h1 className="logo-title">Wave</h1>
    </div>

    <ul className="nav-list">
      <li className="link-item">
        <Link to="/">Home</Link>
      </li>
      <li className="link-item">
        <Link to="/about">About</Link>
      </li>
      <li className="link-item">
        <Link to="/contact">Contact</Link>
      </li>
    </ul>
  </nav>
)
export default Header
