import React from "react";
import myWonderfulImage from "./myImage.jpg";
export const Photo = () => {
 return (
   <>
     <img style={{width:200 ,height:200 }} src={myWonderfulImage} alt ='myImage' />
   </>
 );
};