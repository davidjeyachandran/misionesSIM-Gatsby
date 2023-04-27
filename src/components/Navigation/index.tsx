import React from 'react';
import { Link } from 'gatsby';

// styled components
import * as S from './styles';

const Navigation = () => (
	<S.Nav role='navigation' aria-label='Main'>
		<S.LogoLink to='/'>
			<span>MisionesSIM</span>
		</S.LogoLink>

		<S.MenuList>
			<S.MenuItem>
				<Link to='/' activeClassName='active'>
					Home
				</Link>
			</S.MenuItem>

			<S.MenuItem>
				<Link to='/revista' activeClassName='active'>
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
