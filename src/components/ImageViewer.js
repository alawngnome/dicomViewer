import React from 'react'
import DMVComponent from './DwvComponent'

export default function ImageViewer() {
  const divStyle = {
    height: '80vh'
  }
  return(
    <div style={divStyle}>
      <b>Image View</b>
      <DMVComponent/>
    </div>
  )
}