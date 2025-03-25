import React from 'react';

const MovieList = (props) => {
  return (
    <div>
      <ul>
        {props.movies.map((item, index) => (
          <li key={index}>
            <h2>{item.title}</h2>
            <p><strong>Release Date:</strong> {item.releaseDate}</p>
            <p><strong>Opening Crawl:</strong> {item.openingText}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieList;
