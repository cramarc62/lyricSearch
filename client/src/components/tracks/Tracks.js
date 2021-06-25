import React ,{useContext,useState} from 'react'
import {Track} from './Track'
import {Pagination} from './Pagination'

import {GlobalContext} from '../../context/GlobalState'
import {nanoid} from 'nanoid'
import bootstrap from 'react-bootstrap'
import Spinner from '../layout/Spinner'

export const Tracks = () => {
    const {stateValues}=useContext(GlobalContext);
    const {track_list,heading}=stateValues;

    //const {stateValues}=useContext(GlobalContext)
    //pagination
    const [pagenumber,setpagenumber]=useState(0);

    const pageNumbers=[];

    for(let i=1;i<=10;i++){pageNumbers.push(i);}
    
    const [currentPage,setCurrentPage]=useState(1);
    const [songsPerPage]=useState(10);


    const indexOfLastSong= currentPage * songsPerPage;
    const indexOfFirstSong =indexOfLastSong-songsPerPage;
    const currentSongs=track_list.slice(indexOfFirstSong,indexOfLastSong);

    const paginate= (number)=>setCurrentPage(number);

    //console.log(stateValues.track_list)
    if(track_list.length === 0|| track_list === undefined ) return  <Spinner />
    else{
    
    return (
        <div>
            <React.Fragment>
                <h3 className="text-center mb-4">{heading}</h3>
                    <div className='row'>
                        {currentSongs.map(item=>(
                        <Track key= {nanoid()} track={item.track} />
                        ))}
                    </div>
                
                <div className="row">
                    <div className="col-md-4" >
                    </div> 
                    
                    <Pagination pageNumbers={pageNumbers} paginate={paginate} />
                    
                    <div className="col-md-2" >
                    </div> 
                </div>
    
           </React.Fragment>

        </div>
    )
        }
}
