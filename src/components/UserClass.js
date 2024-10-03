import React from 'react';

class UserClass extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			userInfo: {},
		};
	}

	async componentDidMount() {
		const data = await fetch('https://api.github.com/users/akshaymarch7');
		const jsonData = await data.json();
		this.setState({
			userInfo: jsonData,
		});
	}

	componentDidUpdate() {}

	componentWillUnmount() {}

	render() {
		const { name, location } = this.state.userInfo;
		debugger;
		return (
			<div className="user-card">
				<h2>Name: {name}</h2>
				<h3>Location: {location}</h3>
				<h4>Contact: @abchyd</h4>
			</div>
		);
	}
}

export default UserClass;
