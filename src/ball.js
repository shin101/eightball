import React from "react";

const Ball = props => {
  return (
    <div className="ball" style={{ backgroundColor: props.color }}> 
      <div className="text">{props.msg}</div>
    </div>
  )
}


export default Ball;