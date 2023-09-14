import {useState} from "react"
 import {createStage} from "../game.Helper"

 export const useStage=()=>{
    const[stage,useStage]=useState(createStage());

    return[stage,useStage];
 }