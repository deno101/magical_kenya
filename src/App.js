import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import 'jquery/dist/jquery.min.js'
import 'popper.js/dist/popper.min.js'
import Navbar from './components/navbar/Navbar';
import 'font-awesome/css/font-awesome.min.css'
import Carousel from './components/carousel/Carousel';
import { Newsbar , animateNews} from './components/news-bar/Newsbar';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* component creating navigation bar */}
        <Navbar />

        {/* component creating image carousel slider */}
        <Carousel />

        {/* news bar */}
        <Newsbar />
      </div>
    );
  }

  componentDidMount(){
    // DOM manipulation js
    animateNews();
  }
}

export default App;
