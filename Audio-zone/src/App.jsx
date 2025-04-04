import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import PlaylistSection from "./components/PlaylistSection";
import SongList from "./components/SongList";
import AudioPlayer from "./components/AudioPlayer"; 

const App = () => {
  return (
    <div className="app-container">
      <Navbar />
      <Header />
      <PlaylistSection />
      <SongList />
      <AudioPlayer />
    </div>
  );
};

export default App;
