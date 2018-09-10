import React from 'react';
import './About.css';
import back from './back.png'
const About=({onRouteChange})=>{
	return(
		<div>
			<h1>This is Abouts Page</h1>
			<button type='button' onClick={()=>onRouteChange('searchpage')} className='bg-transparent ba br3 w-10'>
				<img src={back} alt='backbutton' className='icon'/>
				<p className='mt3'>Back</p>
			</button>
		</div>
	);
}
export default About;