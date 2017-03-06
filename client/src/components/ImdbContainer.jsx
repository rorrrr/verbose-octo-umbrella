var React = require('react');
var FilmContainer = require('./FilmContainer.jsx');

var ImdbContainer = React.createClass({


  render: function() {
    return (
      <div className="imdb-container">
      <h1>  Films List of UK Something </h1>
      <FilmContainer/>
      <h1> See more openings </h1>
      </div>
      );
  }
});

module.exports = ImdbContainer;