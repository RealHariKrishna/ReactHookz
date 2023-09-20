import {Link} from 'react-router-dom'
import {BiFirstPage} from 'react-icons/bi'
import { BiLastPage } from 'react-icons/bi'

import './index.css'

function Header() {
  
  return (
    <nav className="nav-container">
      <ul className="header-ul-container">
        <li className='home-jobs-container'>
            <Link className='link' to="/">
                <h1 className='nav-text'>Home</h1>
            </Link>
        </li>
        <li className="home-jobs-container">
          <Link className="link" to="/page1">
            <BiFirstPage className="home-icon" />
            <h1 className="nav-text">First Page</h1>
          </Link>
          </li>
          <li className="home-jobs-container">
          <Link className="link" to="/page2">
          <BiLastPage className="home-icon" />
            <h1 className="nav-text">Last Page</h1>
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Header
