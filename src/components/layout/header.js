import React from 'react'

export default function Header() {
  const headerStyle = {
    background: '#333',
    color: '#fff',
    textAlign: 'center',
    padding: '0.2vh'
  }

  return (
    <header style={headerStyle}>
      <h1>DICOM Image Viewer</h1>
    </header>
  )
}