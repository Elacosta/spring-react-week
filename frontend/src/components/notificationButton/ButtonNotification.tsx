import icon from '../../assets/images/notification-icon.svg'
import "./buttonNotificationStyle.css"

function ButtonNotification() {
    return (
        <div className="dsmeta-red-btn">
            <img src={icon} alt="Notificar" />
        </div>
    )
}

export default ButtonNotification