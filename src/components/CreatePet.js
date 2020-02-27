import React, { useState } from 'react'
import axios from 'axios'
import '../styles/global.css'

const CreatePet = (props,history) => {
	const [name, setName] = useState('')
	const [type, setType] = useState('')
	const [breed, setBreed] = useState('')
	const [location, setLocation] = useState('')
	const [latitude, setLatitude] = useState('')
	const [longitude, setLongitude] = useState('')
	const styles = {
		header: {
			textAlign:'center',
			marginTop: '50px',
			fontSize: '45px',
			fontFamily: 'Helvetica, "sans-serif"',
			lineHeight: 1.5
		},
		form: {
			display:'grid',
			padding:'10px',
			width:'300px',
			marginTop: 60,
			marginLeft:'auto',
			marginRight:'auto',
			border:'1px solid black',
			borderRadius: '6px'
		},
		input: {
			width: 280,
			height: 35,
			margin: 10,
			textAlign: 'center',
			border:'1px solid grey',
			borderRadius: '4px',
			background:'transparent',padding:'.25em .5em .3125em',
			marginLeft: 'auto',
			marginRight: 'auto'
		},
		button: {
			margin: 25,
			width: 140,
			height: 35,
			marginLeft: 'auto',
			marginRight: 'auto',
			color:'salmon',
			border:'1px solid grey',
			borderRadius: '4px',
			background:'',
			padding:'.25em .5em .3125em'
		}
	}

	const submit = (e) => {
		e.preventDefault()
		console.log(name, type, breed, location, latitude, longitude)
		if (name && type && breed && location && latitude && longitude) {
				axios.post(`${process.env.REACT_APP_API}/pet`,
				{
					name:name, type:type, breed:breed, location:location, latitude:latitude, longitude:longitude
				}
			).then(res => {
				console.log(res.data);
				props.history.push('/')
			}).catch(err => {
				console.log(err);
			})
		} else {
			alert('Please complete all the fields')
		}
	}

	return(
		<div>
			<h1 style={styles.header}>To add a pet to the index, <br/> please complete the form below:</h1>
			<form
				style={styles.form}
				onSubmit={submit}>
				<input
					placeholder='Please enter a name for your pet'
					onChange={(e)=>setName(e.target.value)}
					style={styles.input}>
				</input>
				<input
					placeholder='Please enter a type for your pet'
					onChange={(e)=>setType(e.target.value)}
					style={styles.input}>
				</input>
				<input
					placeholder='Please enter a breed for your pet'
					onChange={(e)=>setBreed(e.target.value)}
					style={styles.input}>
				</input>
				<input
					placeholder='Please enter a location for your pet'
					onChange={(e)=>setLocation(e.target.value)}
					style={styles.input}>
				</input>
				<input
					placeholder='Please enter a latitude for your pet'
					onChange={(e)=>setLatitude(e.target.value)}
					style={styles.input}>
				</input>
				<input
					placeholder='Please enter a longitude for your pet'
					onChange={(e)=>setLongitude(e.target.value)}
					style={styles.input}>
				</input>
				<button
					className='button'
					style={styles.button}>
						Submit
				</button>
			</form>
		</div>
	)
}

export default CreatePet
