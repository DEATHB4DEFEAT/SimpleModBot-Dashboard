import { useEffect } from 'react';
import { Link } from 'react-router-dom';

export const Userbar = () => {
	const user = localStorage.getItem('user-info');
	if (!user) return <Link to='/user'>You are missing the user cache. Please login and load the cache in user settings to view the site properly</Link>;
	const cuser = JSON.parse(user);

	function showViewport() {
		var width = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
		var height = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
		return { width, height };
	}

	let width = showViewport().width / 2 - 40;

	if (document.readyState === 'complete') {
		window.location.reload();
	}

	return (
		<div
			style={{
				display: 'flex',
				alignItems: 'center',
				width: '100%',
				padding: '10px',
				boxSizing: 'border-box',
				backgroundColor: '#2121212a',
				borderBottom: '1px solid #58585863',
				borderLeft: '1px solid #58585863',
				borderRight: '1px solid #58585863',
				fontSize: '20px',
				fontWeight: 'normal',
			}}
		>
			<Link to='/' style={{ position: 'relative', left: `${width}px`, padding: '1px 0px' }}>
				Home
			</Link>

			<Link to='/user/' style={{ fontSize: '20px', marginLeft: 'auto', padding: '1px 0px' }}>
				{cuser.username}
			</Link>
			<img
				style={{
					width: '45px',
					height: '45px',
					borderRadius: '50%',
					boxShadow: '0px 1px 5px 0px #000000',
					justifySelf: 'right',
				}}
				src={`https://cdn.discordapp.com/avatars/${cuser.id}/${cuser.avatar}.png?size=128`}
				alt='user-icon'
			></img>
		</div>
	);
};
