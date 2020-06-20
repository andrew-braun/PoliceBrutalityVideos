import React, { Component } from 'react';
import './App.css';
import VideoCard from '../components/VideoCard';

class App extends Component {
  constructor() {
    super();
    this.state = {
      videos: []
    }
  }
  render() {
  return (
    <React.Fragment>
    <div className="app">
      <header className="app-header">
        <h1>Police Brutality Videos</h1>
      </header>
      <main className="page-content">
        <h2>Videos</h2>
        <section className="video-container">
          <VideoCard />
          <VideoCard />
          <VideoCard />
        </section>
      </main>
    </div>
    </React.Fragment>
  );
  }
}

export default App;
