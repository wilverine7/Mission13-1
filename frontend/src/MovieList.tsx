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

      <button className="btn btn-primary" onClick={addMovie}>
        Add Movie
      </button>
    </>
  );
}

export default MovieInfo;
