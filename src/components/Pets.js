import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const Pets = () => {

	useEffect(() => {
	  axios.get('http://localhost:4000/pet')
		.then(res => {
			console.log(res.data);
			setPets(res.data)
		}).catch(err => {
			console.log(err);
		})
	}, []);

	const [pets, setPets] = useState([])

	return(
		<div>
			{
				pets.map(pet => {
					return <Link >
									<div style={{border:'black 1px solid'}}>
										<p>{pet.name}</p>
									</div>
								</Link>
				})
			}
		</div>
	)
}

export default Pets
