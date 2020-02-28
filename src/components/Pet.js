import React, { useState, useEffect } from 'react'
import axios from 'axios'
import '../styles/global.css'
import { Link } from 'react-router-dom'
import { useHistory } from 'react-router'

const Pet = (params, props) => {
	const history = useHistory();
	const [name, setName] = useState('')
	const [type, setType] = useState('')
	const [breed, setBreed] = useState('')
	const [location, setLocation] = useState('')
	const [latitude, setLatitude] = useState('')
	const [longitude, setLongitude] = useState('')
	const [average, setAverage] = useState(0)
	const key = 'e80d091f7987dbcb4a42006a3bf58bce'
	const [umbrellaNeeded, setUmbrellaNeeded] = useState(false)
	const styles = {
		header: {
			textAlign:'center',
			marginTop: '50px',
			fontSize: '55px',
		},
		subHeader: {
			fontSize: '45px',
			lineHeight: '1.5'
		},
		subHeaderAlt:{
			fontSize: '38px',
			lineHeight: '1.5',
			marginLeft: '20px',
			marginRight: '20px'
		},
		container: {
			border:'black 1.5px solid',
			borderRadius:'6px',
			width:'300px',
			marginLeft:'auto',
			marginRight:'auto',
			marginTop:'100px',
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
		},
		outerContainer: {
			display:'grid',
			gridTemplateColumns:'1fr 1fr',
			marginRight: 100
		},
		outerContainerAlt: {
			display:'grid',
			gridTemplateRows:'1fr 1fr'
		},
		link: {
			textAlign: 'center'
		}
	}

	useEffect(() => {
		let token = localStorage.getItem('token')
			if (token) {
				console.log(params.location.pathname.split('/')[2]);
				let id = params.location.pathname.split('/')[2]
				axios.get(`${process.env.REACT_APP_API}/pet/${id}`)
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
				} else {
					history.push('/signup')
				}
	}, []);

	useEffect(() => {
		axios.get(`https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/${key}/${latitude},${longitude}`)
			.then(res => {
				console.log('dark-sky response',res.data.hourly.data, res.data.hourly.data[1].precipProbability);
				let length = res.data.hourly.data.length
				let array = res.data.hourly.data.map((hour, index) => hour.precipProbability)
				let sum = array.reduce((sum, x) => sum + x);
				let average = sum/length
				setAverage(average)
				console.log('Testing to ensure that my logic returns the correct sum. Used array to calculate manually.',average,array);
				if (average > 0.5) {
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
			<Link className='link' to='/pets'>
				<i class="fas fa-arrow-left" style={styles.icon}></i>
			</Link>
			<div style={window.innerWidth < 1366 ? styles.outerContainerAlt : styles.outerContainer}>
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
							<p>According to the forecast, there's a greater than {average.toFixed(3)}% chance of rain in {location}. {name} should bring an umbrella!</p>
							:
							<p>There's only a {average.toFixed(3)}% chance of rain. {name} doesn't need an umbrella.</p>
						}
					</div>
				</div>
				{
					umbrellaNeeded ?
					<div>
						<h1 style={styles.header}>Yup!</h1>
						<p style={window.innerWidth < 1366 ? styles.subHeaderAlt : styles.subHeader}>According to the forecast, there's a greater than {average.toFixed(3)}% chance of rain in {location}. {name} should bring an umbrella!</p>
						<Link to='/pets'><h1>Look up a different pet!</h1></Link>
					</div>
					:
					<div>
						<h1 style={styles.header}>Nope!</h1>
						<p style={window.innerWidth < 1366 ? styles.subHeaderAlt : styles.subHeader}>There's only a {average.toFixed(3)}% chance of rain. {name} doesn't need an umbrella.</p>
						<Link to='/pets'><h1 style={styles.link}>Look up a different pet!</h1></Link>
					</div>
				}
			</div>
		</div>
	)
}

export default Pet
