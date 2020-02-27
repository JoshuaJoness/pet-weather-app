import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Nav from './Nav'

const Pets = () => {
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
			marginTop:'60px',
			fontFamily: 'Helvetica, "sans-serif"'
		},
		img: {
			width:'300px',
			marginTop:'10px'
		},
		name: {
			borderTop:'1px solid black',
			marginTop:'10px',
			textAlign:'center',
			textDecoration: 'none'
		},
		outerContainer: {
			marginBottom: 150
		}
	}

	useEffect(() => {
	  axios.get(`${process.env.REACT_APP_API}/pet`)
		.then(res => {
			console.log(res.data);
			setPets(res.data)
		}).catch(err => {
			console.log(err);
		})
	}, []);

	const [pets, setPets] = useState([])

	return(
		<div style={styles.outerContainer}>
			<Nav />
			<h1 style={styles.header}>Pet Index (click for more info.)</h1>
			{
				pets.map((pet, index) => {
					return <Link key={index} to={`/pet/${pet._id}`}>
									<div style={styles.container}>
										<img src='/cats.png' alt='Drawing of cats' style={styles.img}></img>
										<p style={styles.name}>I'm {pet.name} the {pet.type}</p>
									</div>
								</Link>
				})
			}
		</div>
	)
}

export default Pets


// id opted for mgdb
// process env back and front
// style
// accounts for 2 hours only
