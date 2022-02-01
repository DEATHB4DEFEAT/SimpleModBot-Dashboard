import { Link } from 'react-router-dom';
import { AppbarStyle } from '../utils/styles';

export const Appbar = () => {
	const guildID = localStorage.getItem('guild-id');
	const guilds = localStorage.getItem('guilds');
	// @ts-expect-error
	const cguild = JSON.parse(guilds).find((guild: any) => guild.id === guildID);

	const user = localStorage.getItem('user-info');
	if (!guilds || !user) return <div>You are missing either the user cache or the guild cache. Please refresh it to view the website properly.</div>;
	const cuser = JSON.parse(user);

	return (
		// <AppbarStyle>
		<div
			style={{
				display: 'flex',
				alignItems: 'center',
				padding: '5px',
				boxSizing: 'border-box',
				backgroundColor: '#2121212a',
				borderBottom: '1px solid #58585863',
			}}
		>
			<img
				style={{
					width: '45px',
					height: '45px',
					borderRadius: '50%',
					boxShadow: '0px 1px 5px 0px #000000',
				}}
				src={`https://cdn.discordapp.com/icons/${cguild.id}/${cguild.icon}.webp?size=128`}
				alt='guild-icon'
			></img>
			<Link to='/menu' style={{ fontSize: '20px', fontWeight: 'normal', padding: '1px 10px' }}>
				Configuring {cguild.name}
			</Link>

			<Link to='/user/' style={{ fontSize: '20px', fontWeight: 'normal', padding: '1px 10px' }}>
				{cuser.username}
			</Link>
			<img
				style={{
					width: '45px',
					height: '45px',
					borderRadius: '50%',
					boxShadow: '0px 1px 5px 0px #000000',
				}}
				src={`https://cdn.discordapp.com/avatars/${cuser.id}/${cuser.avatar}.png?size=128`}
				alt='user-icon'
			></img>
		</div>
		// </AppbarStyle>
	);
};
