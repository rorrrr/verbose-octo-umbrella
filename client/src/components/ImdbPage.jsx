var React = require('react');
var ImdbContainer = require('./ImdbContainer.jsx');

var ImdbPage = React.createClass({


  render: function() {
    return (
      <div className="imdb-page">
      <ImdbContainer/>
      <h2> GET SHOWTIMES!!!</h2>
      </div>
      );
  }
});

module.exports = ImdbPage;