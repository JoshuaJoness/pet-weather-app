import React, { useState } from "react";
import axios from 'axios'
import { Link } from 'react-router-dom'
import { useHistory } from 'react-router'

const LogIn = () => {
	const history = useHistory();
	const [name, setName] = useState('');
	const [password, setPassword] = useState('');
	const styles = {
		container: {
			display:'grid',
			gridTemplateColumns: '1fr 1fr 1fr'
		},
		innerContainer:{
			display:'grid',
			gridTemplateRows: '1fr 1fr 1fr'
		},
		headerContainer:{
			display:'grid',
			gridTemplateColumns: '1fr 1fr 1fr'
		},
		header:{
			fontSize:'50px',
			marginLeft:'auto',
			marginRight:'auto',
			fontFamily: "'Pacifico', 'Helvetica'",
			letterSpacing:'3px'
		},
		form: {
			border:'1px solid black',
			borderRadius: '4px',
			height: '500px',
			width: '300px',
			marginTop: 60,marginLeft:'auto',marginRight:'auto',backgroundColor:'white'
		},
		img: {
			width: '280px',
			marginTop: '10px',
			marginLeft: '10px'
		},
		input: {
			width: 260,
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
			color:'#6C63FF',
			border:'1px solid grey',
			borderRadius: '4px',
			background:'',
			padding:'.25em .5em .3125em'
		},
		footer: {
			marginLeft:'11%'
		}
	}

	const submit = (e) => {
		console.log(name, password);
		e.preventDefault()
		axios.post(`${process.env.REACT_APP_API}/login`,
		{
			name:name, password:password
		}).then(res => {
				if (res.data !== 'err') {
					console.log('response', res.data);
					localStorage.setItem('token', res.data)
					history.push('/pets')
					console.log('Success')
				} else {
					alert("No such user found.")
				}
			}).catch(err => {
					console.log(err);
				})
			}

	return(
		<div style={{height:'100vh',backgroundColor:'#6C63FF'}}>
			<div style={styles.headerContainer}>
				<div></div>
				<h1 onSubmit={submit} style={styles.header}>Log-In</h1>
				<div></div>
			</div>
			<div style={styles.container}>
				<div></div>
				<form style={styles.form} onSubmit={submit}>
					<img src='/cats.png' alt='Drawing of cats' style={styles.img}></img>
					<div style={styles.innerContainer}>
						<input
				      onChange={e => setName(e.target.value)}
				      value={name}
							placeholder="Please enter your name"
							style={styles.input}
				    />
						<input
				      onChange={e => setPassword(e.target.value)}
				      value={password}
							placeholder="Please enter a password"
							style={styles.input}
				    />
						<button
				        title="Submit"
								style={styles.button}
				      >Log-In</button>
					</div>
					<p style={styles.footer}>Don't have an account? <Link to='/signup'>sign-up</Link></p>
				</form>
				<div></div>
			</div>
		</div>
	)
}

export default LogIn
