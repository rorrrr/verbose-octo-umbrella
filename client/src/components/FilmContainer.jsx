var React = require('react');
var FilmList = require('./FilmList.jsx');

var sampleData = [
  {id:1, title: "Jaws", showtime: "10pm"},
  {id:2, title: "Cars", showtime:"8pm"}
];

var FilmContainer = React.createClass({


  getInitialState: function () {
    return { films: sampleData }
  },

  render: function() {
    return (
      <div className="film-container">
      <FilmList films={this.state.films} />
      </div>
      );
  }
});

module.exports = FilmContainer;