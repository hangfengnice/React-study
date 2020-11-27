import React, {useContext} from 'react'
import {ColorContext, UPDATE_COLOR} from './color'

export default function Button() {
  const {dispatch} = useContext(ColorContext)
  return (
    <div>
      <button onClick={() => dispatch({type: UPDATE_COLOR, color: 'yellow'})}>黄色</button>
      <button onClick={() => dispatch({type: UPDATE_COLOR, color: 'red'})}>红色</button>
    </div>
  )
}
