import React, { Component } from 'react'
import './Login.css'

export default class App extends Component {
	render() {
		return (
			<React.Fragment>
				<div className="App">
					<body className="App-body">
						<p>Login to access the full dashboard</p>
                        <form>
                            <label htmlFor="email" onClick={() => {
                                // select corresponding input
                                document.getElementById('password').focus();
                            }}>Email</label>
                            <input type="email" id="email" />
                            <label htmlFor="password" onClick={() => {
                                // select corresponding input
                                document.getElementById('password').focus();
                            }}>Password</label>
                            <input type="password" id="password" />
                        </form>
						<button>OK</button>
					</body>
				</div>
			</React.Fragment>
		)
	}
}
