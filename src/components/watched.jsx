import {React,useContext} from "react";
import { GlobalContext } from "./context/GlobalState";
import { API_IMG_W500 } from "../constants/imageUrls";
import Footer from "./footer";
export const Watched=()=>{
    const { watched } = useContext(GlobalContext)
    console.log(watched,"watched>>>>");
    return(
        <div>
            <div className="font-bold text-2xl  mx-10 mt-10">My Wateched Movies List</div>
            <div className="grid gap-8 container z-999  grid-cols-2 md:grid-cols-3  lg:grid-cols-3 xl:grid-cols-3 ">
        
        {watched.map((prop,key)=>{
            console.log(prop,"prop");
            return(
                <div className="w-full m-10 rounded-lg group shadow-md lg:max-w-sm bg-white " >
          
    
          <img
            className="rounded-lg w-auto"
            src={API_IMG_W500 + prop.poster_path}
            alt="image"
        />
   

       
        <div className="p-4 ">
            <h4 className="text-xl font-semibold tracking-tight text-black">
            {prop.title}
            </h4>
            <p className="mb-2 leading-normal text-[#948A99]">
            {prop.overview}
            </p>
           
        </div>
        
    </div>
            )
        })}

        
        </div>
        <div style={{ position: "relative" }}><Footer /></div>
        </div>
    )
}