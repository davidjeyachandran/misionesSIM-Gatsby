import { createTheme } from "@mui/material";

const theme = createTheme({

	palette: {
		primary: {
			main: '#bd2a26'
		},
		secondary: {
			main: '#777',
			contrastText: '#fff'
		}
	}
});


// mediaQueries: {
// 	desktopHD: 'only screen and (max-width: 1920px)',
// 	desktopMedium: 'only screen and (max-width: 1680px)',
// 	desktopSmall: 'only screen and (max-width: 1440px)',
// 	laptop: 'only screen and (max-width: 1366px)',
// 	laptopSmall: 'only screen and (max-width: 1280px)',
// 	tabletLandscape: 'only screen and (max-width: 1024px)',
// 	tabletMedium: 'only screen and (max-width: 900px)',
// 	tabletPortrait: 'only screen and (max-width: 768px)',
// 	mobileXLarge: 'only screen and (max-width: 640px)',
// 	mobileLarge: 'only screen and (max-width: 576px)',
// 	mobileMedium: 'only screen and (max-width: 480px)',
// 	mobileSmall: 'only screen and (max-width: 415px)',
// 	mobileXSmall: 'only screen and (max-width: 375px)',
// 	mobileTiny: 'only screen and (max-width: 325px)'
// },

export default theme;
