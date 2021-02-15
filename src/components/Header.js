  
import React from 'react';
//import SearchForm from './SearchForm';
import Nav from './Nav';

const Header = ({ search, paths }) => {
	return (
		<div className='header'>
			<Nav paths={paths} />
		</div>
	);
};

export default Header;