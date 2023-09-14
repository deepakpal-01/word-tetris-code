import React from 'react'
import { StyledCell } from './Styles/StyledCell'
import {TETROMINUS} from "../tetroMinus"

export default function Cell({type}) {
  return (
    <StyledCell type={'L'} color={TETROMINUS['L'].color}></StyledCell>
  )
}
