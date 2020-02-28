import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Nav from './Nav'
import Pin from './Pin'
import GoogleMapReact from 'google-map-react';

const Pets = (props) => {
	const [pets, setPets] = useState([])
	const key= 'AIzaSyCVJkF4x11QI221vToWHyVvM4voNYuYbwU'
	const center= {
  	lat: 0.000,
  	lng: 0.000
	}
	const zoom= 0
	const styles = {
		header: {
			textAlign:'center',
			marginTop: '50px',
			fontSize: '45px',
			fontFamily: 'Helvetica, "sans-serif"'
		},
		subHeader: {
			textAlign:'center',
			fontSize: '40px',
			fontFamily: 'Helvetica, "sans-serif"',
			color: '#6C63FF'
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
		},
		table: {
			width:"80%",
			textAlign:'center',
			border: '1px solid black',
			marginLeft:'auto',
			marginRight:'auto'
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

	return(
		<div style={styles.outerContainer}>
			<Nav />
			<div style={{display:'grid', gridTemplateColumns:'1fr 1fr 1fr'}}>
			<div></div>
			<img src='/cats.png' alt='Drawing of cats' style={styles.img}></img>
			<div></div>
			</div>
			<h1 style={styles.header}>Does my pet need an umbrella?</h1>
			<h2 style={styles.subHeader}>Select a pet to find out!</h2>
			<table style={styles.table}>
			  <tr>
			    <th>Name</th>
			    <th>Type</th>
			    <th>Breed</th>
					<th></th>
			  </tr>
				{pets.map((pet, index) => {
					return <tr key={index}>
				    <td>{pet.name}</td>
				    <td>{pet.type}</td>
				    <td>{pet.breed}</td>
						<td><Link key={index} to={`/pet/${pet._id}`}>View</Link></td>
				  </tr>
				})}
			</table>

			<div style={{ height: '100vh', width: '80%', marginTop:40, marginLeft:'auto', marginRight:'auto' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: key }}
          defaultCenter={center}
          defaultZoom={zoom}
        >
					{
						pets.map((pet,index) => {
							return <Pin
								key={index}
		            lat={pet.latitude}
		            lng={pet.longitude}
		            text="My Marker"
								id={pet._id}
		          />
						})
					}
        </GoogleMapReact>
      </div>

		</div>
	)
}

export default Pets
