import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App';
import './index.css';


var peopleNames = ["Arslaan", "Juan", "Lluc"];

var ListName = React.createClass({
		render: function() {
			return (
					<ul>{
							this.props.names.map(function(name, i) {
								return <li key={"name_"+i}>{name}</li>
							})
						}
					</ul>
				)		
		}
})



var Button = React.createClass({
	render: function() {
		return <button onClick={this.props.onClick}>Rrandomize name</button>
	}
});

var NameTextArea = React.createClass({
	render: function() {
		return <textarea value={this.props.name}></textarea>
	}
});

var App = React.createClass({
	getInitialState: function() {
		// definir un estado vacio para getInitialState
		return {
			selectedName: ""
		}
	},

// Communication between components
// https://facebook.github.io/react/tips/communicate-between-components.html

	handleClick: function(event) {
		var position = Math.floor(Math.random()*3);
		var name = this.props.names[position];
		this.setState({selectedName: name});
	},
				/*
					En el render de la App
					Se pueden incluir los components con sus propiedades
				*/
	render: function() {
		return (
			<div>
					
				<ListName names={this.props.names} />
				<Button onClick={this.handleClick}/>
				<br />
				<NameTextArea name={this.state.selectedName}/>
			</div>
		);
	}
});


ReactDOM.render(
	<App names={peopleNames} />,
	document.getElementById("root")
);