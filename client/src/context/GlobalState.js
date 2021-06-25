import React,{createContext,useReducer,useState,useEffect } from 'react'
import AppReducer from'./AppReducer'
import axios from 'axios'

const initialState={
    track_list:[],
    heading:'US Top Chart(100)'
    
}
//const [instate,setInstate]=useState(initialState);
export const GlobalContext=createContext(initialState);



//const [inState,setInstate]=useState(initialState);
//setInstate([{track_name:'100'},{track_name:'abc'}])

export const GlobalProvider = ({children}) => {
    
    const[state,dispatch]=useReducer(AppReducer,initialState);

     function loadData(data){
        dispatch({
            type:'loadData',
            payload:data
        })
    }
    
    function searchTrack(title){
        
            const fetchSearch=async()=>{
            console.log("in search track")
            const res1=await axios.get(`https://serene-sierra-43944.herokuapp.com/https://api.musixmatch.com/ws/1.1/track.search?q_track=${title}&page_size=100&s_track_rating=desc&apikey=5f61ed79a312715df7f981f3d2f04a1a`);
            console.log(res1.data)
            dispatch({
                type:"search_track",
                payload: res1.data.message.body.track_list,
                title:title});
            };
            
            fetchSearch();
            
    
        
    }
    
    useEffect(()=>{
        console.log("in useeffect")
        const fetchLyrics=async()=>{
        const res=await axios.get(`https://serene-sierra-43944.herokuapp.com/https://api.musixmatch.com/ws/1.1/chart.tracks.get?chart_name=top&page_size=100&country=us&f_has_lyrics=1&apikey=5f61ed79a312715df7f981f3d2f04a1a`);
        loadData(res.data.message.body.track_list);
        };
        //console.log(res.data)
        fetchLyrics();

    },[])
    
    return (
        <GlobalContext.Provider value={{stateValues:state, searchTrack }}>
            {children}
            
        </GlobalContext.Provider>
    )
}

