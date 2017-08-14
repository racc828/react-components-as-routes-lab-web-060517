import React from 'react';
import { directors } from '../data';

const Directors = () => {
  return (
    <div>
      <h1>Directors Page</h1>
      {directors.map((director) => {
        return (
          <div class="director">
            <h2>{director.name}</h2>
            <li>{director.movies.map ((movie) => {
              return (
                <ul>{movie}</ul>
              )
            })}
            </li>
          </div>
        )
      })}
    </div>
  );
}

export default Directors
