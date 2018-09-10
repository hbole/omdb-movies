import React from 'react';
import './MovieDetails.css';
const ErrorMessage=()=>{
	return(
		<div>
			<h4 className='errtittle'>Sorry, there were no movies matching that query!</h4>
		</div>
	);
}
export default ErrorMessage;