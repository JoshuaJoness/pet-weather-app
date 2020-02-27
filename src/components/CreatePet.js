import React, { useState } from 'react'
import axios from 'axios'

const CreatePet = () => {
	const [name, setName] = useState('')
	const [type, setType] = useState('')
	const [breed, setBreed] = useState('')
	const [location, setLocation] = useState('')
	const [latitude, setLatitude] = useState('')
	const [longitude, setLongitude] = useState('')
	const styles = {
		container: {
			display: 'grid',
			gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr 1fr',
			backgroundColor:'black'
		}
	}

	const submit = () => {
		console.log(name, type, breed, location, latitude, longitude)
		if (name && type && breed && location && latitude && longitude) {
				axios.post('http://localhost:4000/pet',
				{
					name:name, type:type, breed:breed, location:location, latitude:latitude, longitude:longitude
				}
			).then(res => {
				console.log(res.data);
			}).catch(err => {
				console.log(err);
			})
		} else {
			alert('Please complete all the fields')
		}
	}

	return(
		<div>
			<input
				placeholder='Please enter a name for your pet'
				onChange={(e)=>setName(e.target.value)}>
			</input>
			<input
				placeholder='Please enter a type for your pet'
				onChange={(e)=>setType(e.target.value)}>
			</input>
			<input
				placeholder='Please enter a breed for your pet'
				onChange={(e)=>setBreed(e.target.value)}>
			</input>
			<input
				placeholder='Please enter a location for your pet'
				onChange={(e)=>setLocation(e.target.value)}>
			</input>
			<input
				placeholder='Please enter a latitude for your pet'
				type='number'
				onChange={(e)=>setLatitude(e.target.value)}>
			</input>
			<input
				placeholder='Please enter a longitude for your pet'
				type='number'
				onChange={(e)=>setLongitude(e.target.value)}>
			</input>
			<button onClick={submit}>Submit</button>
		</div>
	)
}

export default CreatePet
