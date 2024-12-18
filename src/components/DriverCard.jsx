import Rating from "./Rating"

function DriverCard(props){
    const {name, rating, img, carModel, carLicensePlate} = props; 
    return (
           <div className="driver-card">
                <div className="driver-img">
                    <img src={img} alt="driver pic"/>
                </div>
                <div className="driver-details">
                    <h1>{name}</h1>
                    <Rating>{rating}</Rating>
                    <div className="driver-car">
                        <span>{carModel}</span> - <span>{carLicensePlate}</span>
                    </div>
                </div>
            </div>
    )
}
export default DriverCard