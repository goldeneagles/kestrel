import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import TestPage from './pages/TestPage';

export default class App extends React.Component {
	render() {
		return <div>
			<div>header goes here</div>
			<BrowserRouter>
				<Route path="/test" component={TestPage} />
			</BrowserRouter>
		</div>;
	}
}
