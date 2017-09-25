import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Alert } from 'react-bootstrap';

import TestPage from './pages/TestPage';

export default class App extends React.Component {
	render() {
		return <div>
			<Alert bsStyle="warning">header goes here</Alert>
			<BrowserRouter>
				<Route path="/test" component={TestPage} />
			</BrowserRouter>
		</div>;
	}
}
