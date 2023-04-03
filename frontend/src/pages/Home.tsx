import React from 'react';
import NavBar from '../NavBar';

function Joel() {
  return (
    <div>
      <div className="text-center">
        <h1>Welcome!</h1>
        <p>
          This site is dedicatied to Joel Hilton, a great collector of movies.
        </p>

        <img src="../../JoelHiltonHeadshot.jpg" alt="HeadShot"></img>

        <p>
          You can view Joe's collection as well as be directed to his podcast
          Bacon Sale! Enjoy!!
        </p>
      </div>
    </div>
  );
}

function Home() {
  return (
    <div>
      <NavBar />
      <Joel />
    </div>
  );
}

export default Home;
