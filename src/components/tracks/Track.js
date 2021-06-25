import React from 'react'
import bootstrap from 'react-bootstrap'
import {Link} from 'react-router-dom'

export const Track = (props) => {
    return(
        <div className="col-md-6">
            <div className="card mb-4 shadow-sm">
                <div className="card-body">
                   <h5>{props.track.artist_name}</h5>
                   <br/>
                   <div className="card-text">
                    <p><strong>Track:   </strong>{props.track.track_name}</p>
                    <p><strong>Album:   </strong>{props.track.album_name}</p>
                    <Link to={`lyrics/track/${props.track.track_id}`} className="btn btn-dark btn-block">
                        View Lyric
                    </Link>



                   </div>
                </div>
            </div>
        </div>
    )

    
}
