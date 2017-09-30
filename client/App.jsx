import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Alert } from 'react-bootstrap';

import TestPage from './pages/TestPage';
import JobsAddPage from './pages/JobsAddPage';

export default class App extends React.Component {
	render() {
		return <div>
			<Alert bsStyle="warning">header goes here</Alert>
			<BrowserRouter>
				<div>
					<Route path="/test" component={TestPage} />
					<Route path="/jobs/add" component={JobsAddPage} />
				</div>
			</BrowserRouter>
		</div>;
	}
}
