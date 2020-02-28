import React from 'react'
import { Link } from 'react-router-dom'
import { useHistory } from 'react-router'

const Footer = () => {
	const history = useHistory();
	const styles = {
		nav:{
			height: 50,
			width: '100%',
			backgroundColor: '#6C63FF',
			padding: 0,
			margin: 0,
			display: 'grid',
			gridTemplateColumns: '90% 10%',
			marginTop:'600px'
		},
		navAlt:{
			height: 50,
			width: '100%',
			backgroundColor: '#6C63FF',
			padding: 0,
			margin: 0,
			display: 'grid',
			gridTemplateColumns: '60% 10%',
			marginTop:'600px'
		},
		button:{
			margin: 10,
			height: 35,
			width: 100,
			color:'#6C63FF',
			border:'1px solid black',
			borderRadius: '4px',
			background:'',
			padding:'.25em .5em .3125em .25em',
			textAlign: 'center'
		}
	}

	const logOut = () => {
		localStorage.removeItem('token')
		history.push('/signup')
	}

	return(
		<div style={window.innerWidth < 1366 ? styles.navAlt : styles.nav}>
			<div></div>
			<button style={styles.button} onClick={logOut}><b>Log-out</b></button>
		</div>
	)
}

export default Footer
