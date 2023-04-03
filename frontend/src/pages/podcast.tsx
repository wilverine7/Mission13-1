import React from 'react';
import NavBar from '../NavBar';

function PodcastLink() {
  return (
    <div>
      <a href="https://baconsale.com/">Check out my Podcast here!</a>
    </div>
  );
}

function Podcast() {
  return (
    <div>
      <NavBar />
      <PodcastLink />
    </div>
  );
}

export default Podcast;
