import React from 'react';
import { Link } from 'gatsby';
import logo from '../../assets/logo.png';

// styled components
import * as S from './styles';

const Navigation = () => (
	<S.Nav role='navigation' aria-label='Main'>
		<S.LogoLink to='/'>
			<img width={120} src={logo} />
		</S.LogoLink>

		<S.MenuList>
			<S.MenuItem>
				<Link to='/' activeClassName='active'>
					Home
				</Link>
			</S.MenuItem>

			<S.MenuItem>
				<Link to='/revistavamos' activeClassName='active'>
					Revistas
				</Link>
			</S.MenuItem>

			<S.MenuItem>
				<Link to='/blog/' activeClassName='active'>
					Blog
				</Link>
			</S.MenuItem>
		</S.MenuList>
	</S.Nav>
);

export default Navigation;
