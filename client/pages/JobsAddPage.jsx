import React from 'react';
import linkState from 'linkstate';
import superagent from 'superagent';

export default class JobsAddPage extends React.Component {
	constructor() {
		super();
		this.state = this.getInitialState();
	}
	getInitialState() {
		return {title: "", points: 1, period: "weekly", description: ""};
	}
	render() {
		return <div className="container card">
			<form onSubmit={this.submit.bind(this)}>
				<input type="text" value={this.state.title} onInput={linkState(this, 'title')} className="form-control" placeholder="Title" />
				<select value={this.state.period} onChange={linkState(this, 'period')} className="form-control">
					<option>daily</option>
					<option>weekly</option>
				</select>
				<textarea onInput={linkState(this, 'description')} className="form-control" placeholder="Description" value={this.state.description}></textarea>
				<input type="number" value={this.state.points} onChange={linkState(this, 'points')} className="form-control" placeholder="Points" />
				<input type="submit" />
			</form>
		</div>;
	}
	submit(evt) {
		evt.preventDefault();
		console.log("submit");
		superagent.post('/api/jobs/add')
			.send(this.state)
			.then(() => {
				alert("Added!");
				this.setState(this.getInitialState());
			}, (err) => {
				alert(err.response.text || err);
			});
	}
}
