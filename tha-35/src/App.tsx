import React from 'react';
import './App.css';
import Navbar from "./components/navbar"
import Story from "./components/story"
import Post from "./components/post"

function App() {
  return (
    <div className="App">
     <Navbar />
     <Story />
     <Post />
     <div>hello</div>
    </div>
  );
}

export default App;
