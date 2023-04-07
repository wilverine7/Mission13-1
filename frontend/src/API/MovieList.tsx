import { useState } from 'react';
import { Movies } from '../types/Movies';

function MovieList() {
  const [listMovies, setListOfMovies] = useState<Movies[]>([]);

  const fetchMovies = async () => {
    const rsp = await fetch('https://localhost:4000/Movie');
    const data = await rsp.json();
    setListOfMovies(data);
  };

  fetchMovies();

  return (
    <>
      <div className="text-center">
        <h1>Joel's Movie List</h1>
      </div>
      <div className="container">
        <div className="row">
          <table className=" table col-xs-7 table-bordered table-striped">
            <thead>
              <tr>
                <th className="col">Movie ID</th>
                <th className="col">Title</th>
                <th className="col">Year</th>
                <th className="col">Director</th>
                <th className="col">Rating</th>
                <th className="col">Category</th>
                <th className="col">Edited</th>
                <th className="col">Lent To</th>
                <th className="col">Notes</th>
              </tr>
            </thead>
            <tbody>
              {listMovies.map((movie) => (
                <tr>
                  <td className="col">{movie.movieId}</td>
                  <td className="col">{movie.title}</td>
                  <td className="col">{movie.year}</td>
                  <td className="col">{movie.director}</td>
                  <td className="col">{movie.rating}</td>
                  <td className="col">{movie.category}</td>
                  <td className="col">{movie.edited}</td>
                  <td className="col">{movie.lentTo}</td>
                  <td className="col">{movie.notes}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* <button className="btn btn-primary" onClick={addMovie}>
        Add Movie
      </button> */}
    </>
  );
}

export default MovieList;
