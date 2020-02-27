import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'

import CreatePet from './CreatePet'
import Pets from './Pets'
import Pet from './Pet'

class Routes extends React.Component {
	render () {
		return (
			<BrowserRouter>
				<Switch>
					<Route path ='/create' component={CreatePet} />
					<Route path ='/pet/:id' component={Pet} />
					<Route path ='/' component={Pets} />
				</Switch>
			</BrowserRouter>
		)
	}
}

export default Routes
