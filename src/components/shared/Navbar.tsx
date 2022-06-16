import { Link } from 'react-router-dom'
import logo from '../../assets/logo.png'

/**
 * Navbar shared component
 * @author [jose quintero](https://jottasistemas.com)
 */

const Navbar = () => {
  return (
    <nav className="navbar navbar-dark bg-dark">
        <div className="container">
            <Link to="/" className="navbar-brand">
                <img src={logo} alt="" width="120" height="auto" />
            </Link>
        </div>
    </nav>
  )
}

export default Navbar