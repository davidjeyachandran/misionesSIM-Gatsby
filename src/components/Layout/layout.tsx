import React from 'react';
import { ThemeProvider } from 'styled-components';

// types
import type { ReactNode } from 'react';
import type { WindowLocation } from '@reach/router';

// components
import Footer from '../Footer/Footer';
import Navigation from '../Navigation';
import Seo from '../Seo';

// styled components
import GlobalStyle from '../../styles/GlobalStyle';
import theme from '../../styles/theme';

// props
type LayoutProps = {
	children: ReactNode;
	location: WindowLocation;
};

const Layout = ({ children, location }: LayoutProps) => (
	<ThemeProvider theme={theme}>
		<GlobalStyle />
		<Seo title='MisionesSIM' />
		<Navigation />
		<main className='test'>{children}</main>
		<Footer />
	</ThemeProvider>
);

export default Layout;
