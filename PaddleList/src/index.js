import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

var paddleGuys = ["Arslan", "Juan", "Lluc"]
var paddleGuy = []

var paddleList = paddleGuys.map(
	function(guy, i){
		return <li key={"guy_" + i}>{guy}</li>
});

//var randomPaddle = Math.floor(Math.random() * paddleList.length);

var assignPaddle = React.createClass({
	scream: function () {
		paddleGuy.push(paddleGuys.splice(Math.floor(Math.random() * paddleGuys.length)));
  },


  	render: function () {
  		return (
  			<div>
  				<ul>{paddleList}</ul>
  				<button onClick={this.scream}>Paddle</button>
  				<h2>{paddleGuy}</h2>

  			</div>
  		)
  	}

})




ReactDOM.render(
  <assignPaddle />,
  document.getElementById('root')
);
