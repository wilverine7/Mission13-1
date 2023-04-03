import { useState } from 'react';
import data from './MovieData.json';
import './MovieList.module.css';

const MovieData = data.MovieData;

function MovieInfo() {
  const [listMovies, setListOfMovies] = useState(MovieData);
  const addMovie = () => {
    setListOfMovies([
      ...MovieData,
      {
        Category: 'Action/Adventure',
        Title: 'Avengers, The',
        Year: 2012,
        Director: 'Joss Whedon',
        Rating: 'PG-13',
        Edited: 'No',
      },
    ]);
  };

  return (
    <>
      <div className="text-center">
        <h1>Joel's Movie List</h1>
      </div>
      <div className="container">
        <div className="row">
          <table className="col-xs-7 table-bordered table-striped table-condensed table-fixed">
            <thead>
              <tr>
                <th className="col">Title</th>
                <th className="col">Year</th>
                <th className="col">Director</th>
                <th className="col">Rating</th>
                <th className="col">Category</th>
                <th className="col">Edited</th>
              </tr>
            </thead>
            <tbody>
              {listMovies.map((movie) => (
                <tr>
                  <td className="col">{movie.Title}</td>
                  <td className="col">{movie.Year}</td>
                  <td className="col">{movie.Director}</td>
                  <td className="col">{movie.Rating}</td>
                  <td className="col">{movie.Category}</td>
                  <td className="col">{movie.Edited}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <table className="col-xs-7 table-bordered table-striped table-condensed table-fixed">
            <thead>
              <tr>
                <th className="col">Full Name</th>
                <th className="col">Age</th>
                <th className="col">Job Title</th>
                <th className="col">Location</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="col">Varun Thakur</td>
                <td className="col">30</td>
                <td className="col">DevOps Engineer</td>
                <td className="col">India</td>
              </tr>
              <tr>
                <td className="col">Olive Yu</td>
                <td className="col">29</td>
                <td className="col">UI Developer</td>
                <td className="col">United Kingdom</td>
              </tr>
              <tr>
                <td className="col">Sam Buca</td>
                <td className="col">35</td>
                <td className="col">SQL Developer</td>
                <td className="col">United States</td>
              </tr>
              <tr>
                <td className="col">Tom Ollie</td>
                <td className="col">27</td>
                <td className="col">IT Programmer</td>
                <td className="col">Italy</td>
              </tr>
              <tr>
                <td className="col">Ray Cyst</td>
                <td className="col">37</td>
                <td className="col">Network Administrator</td>
                <td className="col">France</td>
              </tr>
              <tr>
                <td className="col">Helen Highwater</td>
                <td className="col">28</td>
                <td className="col">Technical Specialist</td>
                <td className="col">Brasil</td>
              </tr>
              <tr>
                <td className="col">Caire Innet</td>
                <td className="col">26</td>
                <td className="col">Security Analyst</td>
                <td className="col">South Africa</td>
              </tr>
              <tr>
                <td className="col">Val Adictorian</td>
                <td className="col">24</td>
                <td className="col">Data Entry</td>
                <td className="col">Netherlands</td>
              </tr>
              <tr>
                <td className="col">Cooke Edoh</td>
                <td className="col">33</td>
                <td className="col">IT Manager</td>
                <td className="col">Canada</td>
              </tr>
              <tr>
                <td className="col">Rick Shaw</td>
                <td className="col">25</td>
                <td className="col">Cloud Architect</td>
                <td className="col">Norway</td>
              </tr>
              <tr>
                <td className="col">Rick Shaw</td>
                <td className="col">25</td>
                <td className="col">Cloud Architect</td>
                <td className="col">Norway</td>
              </tr>
              <tr>
                <td className="col">Cooke Edoh</td>
                <td className="col">33</td>
                <td className="col">IT Manager</td>
                <td className="col">Canada</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <button className="btn btn-primary" onClick={addMovie}>
        Add Movie
      </button>
    </>
  );
}

export default MovieInfo;
