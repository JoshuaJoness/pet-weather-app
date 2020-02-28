import React, { useEffect } from 'react'
import { useHistory } from 'react-router';

const Pin = (lat, lng, props) => {
	const history = useHistory();
	const goToPet = () => {
		console.log(lat.id);
		history.push(`/pet/${lat.id}`)}

	return(
		<div className="pin" lat={lat} lng={lng} onClick={goToPet}>
		  <i class="fas fa-paw fa-spin" style={{fontSize:30}}></i>
		</div>
	)
}

export default Pin
