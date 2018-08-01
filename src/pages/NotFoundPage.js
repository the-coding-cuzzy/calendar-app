import React, {Component} from 'react';
import { Link } from 'react-router-dom'

export default class NotFoundPage extends Component {
	render () {
		return (
			<div>
				<h1>This is NotFoundComponent</h1>
				<h2>The page you requested could not be found!</h2>
				<p>
					<Link to="/"> Go back to main page</Link>
				</p>
			</div>
		);
	}
}