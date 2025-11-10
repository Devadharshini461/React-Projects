import React, { useState } from "react";
function Admin(){
    const[Showinput,setShowinput]=useState(false);
    return(
        <div>
            <h1>Admin Page</h1>
            <button onClick={()=>setShowinput(!Showinput)}>{Showinput ? "hide" :"view"}</button>
        

        {Showinput && (
            <>
            <br />
            <h4>True</h4>
            <input type='text' />
            </>
        )}
        
        {!Showinput && (
            <>
            <br />
            <h4>False</h4>
            <select>
                <option>A</option>
                <option>B</option>
            </select>
            </>
        )}
        </div>
    );
}
export default Admin