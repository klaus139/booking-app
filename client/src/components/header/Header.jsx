import './header.css';
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faBed, faPlane, faTaxi, faCar} from '@fortawesome/free-solid-svg-icons';
const Header = () => {
  return (
    <div className='header'>
        <div className='headerContainer'>
        <div className="headerList">
            <div className="headerListItem active">
            <FontAwesomeIcon icon={faBed} />
            <span>Stays</span>
            </div>
            <div className="headerListItem">
            <FontAwesomeIcon icon={faPlane} />
            <span>Flights</span>
            </div>
            <div className="headerListItem">
            <FontAwesomeIcon icon={faCar} />
            <span>Car Rentals</span>
            </div>
            <div className="headerListItem">
            <FontAwesomeIcon icon={faBed} />
            <span>Attraction</span>
            </div>
            <div className="headerListItem">
            <FontAwesomeIcon icon={faTaxi} />
            <span>Airport Taxi</span>
            </div>
        </div>
        <h1 className="headerTitle">A lifetime of discounts? Its Genius</h1>
        <p className="headerDesc">
            Get rewarded for your travels unlock instant savings of 10px or more with a free Klausbooking account
        </p>
        <button className="headerBtn">Sign in / Register</button>
        </div>
    </div>
  )
}

export default Header