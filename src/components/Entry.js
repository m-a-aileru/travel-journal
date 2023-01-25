import React from "react"
import { FaMapMarkerAlt } from "react-icons/fa"

function Entry(props) { 
    return (
        <div className="entry--container">
            <div className="entry--img-container">
                <img src={props.image} alt="" class="entry--img" />
            </div>
            <div className="entry--content">
                <h4 className="entry--country"><span className="marker"><FaMapMarkerAlt /></span>{props.country}</h4>
                <a href={props.gmapUrl} className="entry--gmap-link" target="_blank" rel="noreferrer">View on Google Maps</a>
                <h1 className="entry--location">{props.location}</h1>
                <h4 className="entry--date">{props.date}</h4>
                <p className="entry--info">{props.info}</p>
            </div>
        </div>
    )
}

export default Entry