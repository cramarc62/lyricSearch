export default (state,action) => {
    switch(action.type){
      case 'loadData':
        console.log(action.payload)
        return{
          ...state,
          track_list: action.payload
        }
       case 'search_track':

         return{
           ...state,
           track_list:action.payload,
           heading:"Search Results For Track "+`"`+action.title+`"`
         }
      
     default:
        return state
  }
}
