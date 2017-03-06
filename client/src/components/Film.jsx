var React = require('react');

var Film = React.createClass({

  propTypes: {
    title: React.PropTypes.string,
    showtime: React.PropTypes.node.isRequired
  },

  render: function() {
    return (

      <div className="film">

        <h4> {this.props.title} which plays at {this.props.showtime} </h4>

      </div>

      )

  }


});

module.exports = Film;