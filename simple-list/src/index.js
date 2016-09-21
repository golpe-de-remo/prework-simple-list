import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

var NamesList = React.createClass({
	render: function() {
		return (
			<ul>
				{
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
		return <button onClick={this.props.onClick}>Pick random name</button>
	}
});

var NameBox = React.createClass({
	render: function() {
		return <textarea value={this.props.name}></textarea>
	}
})

var App = React.createClass({
	getInitialState: function() {
		return {
			selectedName: ""
		}
	},
	handleClick: function(event) {
		var position = Math.floor(Math.random()*3);
		var name = this.props.names[position];
		this.setState({selectedName: name});
	},
	render: function() {
		return (
			<div>
				<NamesList names={this.props.names} />
				<Button onClick={this.handleClick}/>
				<NameBox name={this.state.selectedName}/>
			</div>
		);
	}
});

var developers = ["Lluc", "Juan", "Arslaan"];

ReactDOM.render(
	<App names={developers} />,
	document.getElementById("root")
);

