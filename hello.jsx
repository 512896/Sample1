var React = require('react');
var ReactDOM = require('react-dom');
 
var World = React.createClass({
	render:function() {
    	 return <h1>Welcome to Reactjs World</h1>
  }
  });
 
ReactDOM.render(<World/>, document.getElementById('helloworld'));