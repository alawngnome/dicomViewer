import React, {Component} from 'react'
import './App.css'
import Header from './components/layout/header.js'
import ImageViewer from './components/ImageViewer.js'

export default class App extends Component {
  render() {
    return (
      <div className='App'>
        <Header/>
        <ImageViewer />
      </div>
    )
  }
}