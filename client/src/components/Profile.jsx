import React from "react";
import {GrFacebook} from "react-icons/gr";
import {FaTwitter} from "react-icons/fa";



export const Profile=()=>{
    return(
        <>
         <div className="max-w-2xl mx-auto my-20 grid grid-cols-1 gap-8 bg-white md:grid-cols-2 rounded-lg shadow-lg md:place-items-center overflow-hidden">
            <article>
                <img className="md:h-64 md:object-cover" src="https://images.pexels.com/photos/34534/people-peoples-homeless-male.jpg?auto=compress&cs=tinysrgb&w=400" alt="sorry" />
            </article>
            <article className="md:pr-8">
                <h3 className="text-2xl mb-4">Gaurav Chaudhary</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum unde sapiente distinctio vitae mollitia consequuntur?</p>
            <ul className="flex items-center justify-start gap-4 mt-8">
                <li><GrFacebook className="text-2xl text-slate-600"/></li>
                <li><FaTwitter className="text-2xl text-slate-600"/></li>
               
            </ul>
            </article>
         </div>
        </>
    )
}