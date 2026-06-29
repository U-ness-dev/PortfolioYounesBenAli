import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav>
      <Link to="/">YB</Link>
      <ul>
        <li><Link to="/projects">Projects</Link></li>
        <li><Link to="/experience">Experience</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  )
}

export default Navbar
