import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'

import CreatePet from './CreatePet'
import Pets from './Pets'

class Routes extends React.Component {
	render () {
		return (<BrowserRouter>
							<Switch>
								<Route path ='/create' component={CreatePet} />
								<Route path ='/' component={Pets} />
							</Switch>
						</BrowserRouter>
					)
	}
}

export default Routes
