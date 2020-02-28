import React from 'react'
import { Link } from 'react-router-dom'
import { useHistory } from 'react-router'

const Nav = () => {
	const history = useHistory();
	const styles = {
		nav:{
			height: 50,
			width: '100%',
			backgroundColor: '#6C63FF',
			padding: 0,
			margin: 0,
			display: 'grid',
			gridTemplateColumns: '10% 70% 10% 10%'
		},
		logo:{
			fontSize: 40,
			margin: 5
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
		<div style={styles.nav}>
			<Link className='logo' to='./pets'>
				<i class="fas fa-cat" style={styles.logo}></i>
			</Link>
			<div></div>
			<Link to='./create'>
				<button style={styles.button}><b>Add Pet</b></button>
			</Link>
			<button style={styles.button} onClick={logOut}><b>Log-out</b></button>
		</div>
	)
}

export default Nav
