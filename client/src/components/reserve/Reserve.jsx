import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";

import './reserve.css';

const Reserve = ({setOpen, hotelId}) => {
    return (
        <div classname='reserve'>
            <div className="rContainer">
                <FontAwesomeIcon
                icon={faCircleXmark}
                className="rClose"
                onClick={() => setOpen(false)}
                />
                <span>Select your room</span>
            </div>
        </div>
    )
}

export default Reserve