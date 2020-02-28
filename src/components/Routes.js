import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'

import CreatePet from './CreatePet'
import SignUp from './SignUp'
import LogIn from './LogIn'
import Pets from './Pets'
import Pet from './Pet'

class Routes extends React.Component {
	render () {
		return (
			<BrowserRouter>
				<Switch>
					<Route path ='/create' component={CreatePet} />
					<Route path ='/signup' component={SignUp} />
					<Route path ='/login' component={LogIn} />
					<Route path ='/pet/:id' component={Pet} />
					<Route path ='/pets' component={Pets} />
					<Route path ='/' component={SignUp} />
				</Switch>
			</BrowserRouter>
		)
	}
}

export default Routes
