var React = require('react');
var ReactDOM = require('react-dom');
var ImdbPage = require('./components/ImdbPage');

window.onload = function(){
  ReactDOM.render(
    <ImdbPage id="mainbox" />,
    document.getElementById('app')
  );
}
