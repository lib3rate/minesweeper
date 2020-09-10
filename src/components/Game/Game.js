import React from "react";
import Cell from './Cell';

export default function Game(props) {

  return (
    <Cell
      onLeftClick={props.onMouseDown}
      onRightClick={props.onContextMenu}
    />
  )
}