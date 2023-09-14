import React,{useState} from 'react'
import Stage from './Stage'

import {createStage} from '../game.Helper'
import StartButton from './StartButton'
import { StyledTetrisWrapper,StyledTetris } from './Styles/StyledTetris'

import {usePlayer} from "../hooks/usePlayer"
import {useStage} from "../hooks/useStage"

export default function Tetris() {

  const[dropTime,setDropTime]=useState(null);
  const[gameOver,setGameOver]=useState(false);

  const[player,updatePlayerPos,resetPlayer]=usePlayer();
  const[stage,setStage]=useStage(player)

  console.log("re-render")

  const movePlayer=dir=>{
    updatePlayerPos({x:dir,y:0})
  }
  const startGame=()=>{
    setStage(createStage())
    resetPlayer()
  }
  const drop=()=>{
    // updatePlayerPos({x:0,y:1,collided:false})    
  }
  const dropPlayer=()=>{
    drop()
  }
  const move=({keycode})=>{
    if(!gameOver){
      if(keycode===37){
        movePlayer(-1);
      }
      else if(keycode===39){
        movePlayer(1)
      }
      else if(keycode===40){
        dropPlayer()
      }
    }
  }

   
  
  return (
    <>
    <StyledTetrisWrapper role="button" tabIndex="0" onKeyDown={ e => move(e)}>
      <StyledTetris>
      <Stage stage={createStage()}/>
      <aside>          
      </aside>
    </StyledTetris>
    </StyledTetrisWrapper>
    
    </>
  )
}
