import React, { useState, useEffect } from 'react'
import axios from 'axios'
import '../styles/global.css'
import { Link } from 'react-router-dom'

const Pet = (params, props, history) => {
	const [name, setName] = useState('')
	const [type, setType] = useState('')
	const [breed, setBreed] = useState('')
	const [location, setLocation] = useState('')
	const [latitude, setLatitude] = useState('')
	const [longitude, setLongitude] = useState('')
	const key = 'e80d091f7987dbcb4a42006a3bf58bce'
	const [umbrellaNeeded, setUmbrellaNeeded] = useState(false)
	const styles = {
		header: {
			textAlign:'center',
			marginTop: '50px',
			fontSize: '45px',
			fontFamily: 'Helvetica, "sans-serif"'
		},
		container: {
			border:'black 1.5px solid',
			borderRadius:'6px',
			width:'300px',
			marginLeft:'auto',
			marginRight:'auto',
			marginTop:'100px',
			fontFamily: 'Helvetica, "sans-serif"'
		},
		img: {
			height:'250px',
			marginTop:'10px'
		},
		attributes: {
			borderTop:'1px solid black',
			marginTop:'10px',
			paddingLeft:'20px',
			paddingRight: '12px'
		},
		icon: {
			fontSize: 30,
			margin: 15
		}
	}

	useEffect(() => {
		console.log(params.location.pathname.split('/')[2]);
		let id = params.location.pathname.split('/')[2]
		axios.get(`http://localhost:4000/pet/${id}`)
			.then(res => {
				console.log(res.data);
				setName(res.data.name)
				setType(res.data.type)
				setBreed(res.data.breed)
				setLocation(res.data.location)
				setLatitude(res.data.latitude)
				setLongitude(res.data.longitude)
			}).catch(err => {
				console.log(err);
			})
	}, []);

	useEffect(() => {
		axios.get(`https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/${key}/${latitude},${longitude}`)
			.then(res => {
				console.log('dark-sky response',res.data.hourly.data[0].precipProbability, res.data.hourly.data[1].precipProbability);
				if (res.data.hourly.data[0].precipProbability > 0.5 || res.data.hourly.data[1].precipProbability > 0.5) {
					setUmbrellaNeeded(true)
				} else {
					setUmbrellaNeeded(false)
				}
			}).catch(err => {
				console.log(err);
			})
	}, [latitude, longitude])

	const [pets, setPets] = useState([])

	return(
		<div>
			<Link className='link' to='/'>
				<i class="fas fa-arrow-left" style={styles.icon}></i>
			</Link>
			<h1 style={styles.header}>This is {name} the {type}</h1>
			<div style={styles.container}>
				<img src='/cat.png' alt='Drawing of cat.' style={styles.img}></img>
				<div style={styles.attributes}>
					<p><b>Name:</b> {name}</p>
					<p><b>Type:</b> {type}</p>
					<p><b>Breed:</b> {breed}</p>
					<p><b>Location:</b> {location}</p>
					<p><b>Latitude:</b> {latitude}</p>
					<p><b>Longitude:</b> {longitude}</p>
					{
						umbrellaNeeded ?
						<p>According to the forecast, there's a greater than 50% chance of rain within the next 2 hours. You should bring an umbrella!</p>
						:
						<p>There's a less than 50% chance of rain within the next 2 hours. You should be alright without an umbrella!</p>
					}
				</div>
			</div>
		</div>
	)
}

export default Pet
