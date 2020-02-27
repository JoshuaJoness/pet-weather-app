import React, { useState, useEffect } from 'react'
import axios from 'axios'

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
					return <div style={{border:'black 1px solid'}}>
									<p>{pet.name}</p>
									<p>{pet.type}</p>
									<p>{pet.breed}</p>
									<p>{pet.location}</p>
									<p>{pet.latitude}</p>
									<p>{pet.longitude}</p>
								</div>
				})
			}
		</div>
	)
}

export default Pets
