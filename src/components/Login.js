import React from 'react';

const Login = ({ search, paths }) => {
	return (
		<div>
			<input className="form-control mr-2 pt-0 pb-0" type="search" placeholder="username" />
            <input className="form-control mr-2 pt-0 pb-0" type="search" placeholder="password" />
		</div>
	);
};

export default Login;