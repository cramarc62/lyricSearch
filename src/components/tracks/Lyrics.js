import React, {useState,useEffect} from 'react'
import axios from'axios'
import {Link} from "react-router-dom"
import Spinner from '../layout/Spinner'

export const Lyrics = (props) => {
    const [lyric,setLyric]=useState({})
    const [track,setTrack] =useState({})

    useEffect(()=>{
        const fetchSingleLyric=async ()=>{
            const res1= await axios.get(`https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/track.lyrics.get?track_id=${props.match.params.id}&apikey=5f61ed79a312715df7f981f3d2f04a1a`);
            //console.log(res1.data);
            setLyric(res1.data.message.body.lyrics)
           // const res2
           const res2= await axios.get(`https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/track.get?track_id=${props.match.params.id}&apikey=5f61ed79a312715df7f981f3d2f04a1a`);
           console.log(res2.data); 
           setTrack(res2.data.message.body.track)
        }
        fetchSingleLyric();
    },[])
    if(Object.keys(track).length===0 ||Object.keys(lyric).length===0) return <Spinner />
    else {
       return (
        <React.Fragment>
            <Link to="/" className="btn btn-dark btn-sm mb-4">Go Back</Link>
            <div className="card">
                <h5 className="card-header">
                    {track.track_name} by {track.artist_name}
                </h5>
                <div  className="card-body">
                     <h1>LYRIC</h1>
                     <p className="card-text">{lyric.lyrics_body}</p>
                </div>

            </div>

            <ul className="list-group mt-3">
                <li className="list-group-item">
                    <strong> Album Id: {track.album_id}</strong>
                </li>
                <li className="list-group-item">
                </li>

            </ul>
        </React.Fragment>
    )
       }
}
