import User from './User';
import UserClass from './UserClass';
import { Component } from 'react';
import UserContext from '../utils/UserContext';

class About extends Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {}

	render() {
		return (
			<div>
				<h1>About</h1>
				<div>
					Logged In User:
					<UserContext.Consumer>
						{({ loggedInUser }) => <h1>{loggedInUser}</h1>}
					</UserContext.Consumer>
				</div>
				<h2>This is ABout US Page</h2>
				<UserClass name={'First'} />
			</div>
		);
	}
}

export default About;
