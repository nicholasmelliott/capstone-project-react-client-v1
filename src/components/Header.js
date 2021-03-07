  
import React from 'react';
//import SearchForm from './SearchForm';
import Nav from './Nav';

const Header = ({ search, paths, weather }) => {
	return (
		<div className='header'>
			<Nav paths={paths} weather={weather} />
		</div>
	);
};

export default Header;