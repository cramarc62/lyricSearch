import React, {useContext,useState}from 'react'
import {GlobalContext} from '../../context/GlobalState'

export const SearchTrack = () => {
    const [title,setTitle]=useState('')
    const {searchTrack,stateValues}=useContext(GlobalContext);
    
    const onSubmit= (e)=>{
        e.preventDefault();
        searchTrack(title);
        setTitle('');

    }

    return (
        <div className="row">
         <div className="col-md-3" >
         </div> 
         <div className="card card-body  col-md-6 mb-4 ">
            <h4 className="text-center"> Search For A Song </h4>
            <form onSubmit={onSubmit}>
                <div className="form-group">
                    <input value={title} onChange={(e)=>setTitle(e.target.value)}  type="text" className="form-control" placeholder="Song Title..."  required /><br/>
                    <button type="submit" className="btn btn-primary btn-block">SEARCH SONG</button>
                </div>   
                
            </form>
         </div>

         <div className="col-md-3" >
         </div> 
        </div>
        
    )
}
