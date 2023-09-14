import {useCallback, useState} from "react"
import { randomTetrominos } from "../tetroMinus" 
import { STAGE_WIDTH } from "../game.Helper";

export const usePlayer=()=>{
    const[player,setPlayer]=useState({
        pos:{x:0,y:0},
        // tetrominos:randomTetrominos().shape,
        collided:false,
    });

    const updateplayerPos=({x,y,collided})=>{
        setPlayer(prev=>({
            ...prev,
            pos: {x:(prev.pos.x+=x), y:(prev.pos.y+=y)},
            collided,
        }))
    }
    

    const resetPlayer=useCallback(()=>{
        setPlayer({
            pos:{x:STAGE_WIDTH/2-2,y:0 },
            // tetrominos:randomTetrominos().shape,
            collided:false,
        })
    },[])

    return [player,updateplayerPos,resetPlayer]
}