var React = require('react');
var Film = require('./Film')

var FilmList = React.createClass({

  
  propTypes: {
    films: React.PropTypes.array.isRequired
  },

  render: function() {

    var filmNodes = this.props.films.map(function (film, index) {
      return (
        <Film title={ film.title } showtime={film.showtime} key={film.id}>
        Hello world!
        </Film> 
        ) 
    });

    return (
      <div className="film-list">
      { filmNodes }
      </div>
      )
  }
});

module.exports = FilmList;