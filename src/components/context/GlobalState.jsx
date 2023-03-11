import {React , createContext , useReducer, useEffect}  from 'react'




const initialState = {
    // watchlist : localStorage.getItem("watchlist") ? 
    //             JSON.parse(localStorage.getItem("watchlist")) : [] ,
    watched : localStorage.getItem("watched") ?
              JSON.parse(localStorage.getItem("watched")) : []
};

export const GlobalContext = createContext(initialState)

const reducer = (state , action)=>{
    switch(action.type){
   
        case 'ADD_MOVIE_TO_WATCHED':
          return{
            ...state,
            watched : [action.payload , ...state.watched]
          }
      
        default:
            return state
    }
}

const GlobalProvider = (props) => {
    const [state , dispatch ] = useReducer(reducer , initialState)


    useEffect(()=>{
      localStorage.setItem('watched' , JSON.stringify(state.watched))
    } , [state])



  return (
    <GlobalContext.Provider value={{ watched : state.watched , MoviesDispatch : dispatch }}>
      {props.children}
    </GlobalContext.Provider>
  )
}

export default GlobalProvider