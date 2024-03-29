import dotenv from 'dotenv';

dotenv.config({ path: `.env.${process.env.NODE_ENV}` });

const contentfulConfig = {
	accessToken: process.env.CONTENTFUL_ACCESS_TOKEN || process.env.CONTENTFUL_DELIVERY_TOKEN,
	host: process.env.CONTENTFUL_HOST,
	spaceId: process.env.CONTENTFUL_SPACE_ID
};

// If you want to use the preview API please define
// CONTENTFUL_HOST and CONTENTFUL_PREVIEW_ACCESS_TOKEN in your environment config.

// CONTENTFUL_HOST should map to `preview.contentful.com`
// CONTENTFUL_PREVIEW_ACCESS_TOKEN should map to your Content Preview API token

// For more information around the Preview API check out the documentation at
// https://www.contentful.com/developers/docs/references/content-preview-api/#/reference/spaces/space/get-a-space/console/js

// To change back to the normal CDA, remove the CONTENTFUL_HOST variable from your environment.
if (process.env.CONTENTFUL_HOST) {
	contentfulConfig.host = process.env.CONTENTFUL_HOST;
	contentfulConfig.accessToken = process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN;
}

const { spaceId, accessToken } = contentfulConfig;

if (!spaceId || !accessToken) {
	throw new Error('Contentful spaceId and the access token need to be provided.');
}

export default {
	siteMetadata: {
		title: 'MisionesSIM',
		description: 'Sociedad Internacional Misionera',
		siteUrl: 'https://misionessim.netlify.app/'
	},
	pathPrefix: '/gatsby-contentful-starter',
	plugins: [
		'gatsby-transformer-remark',
		'gatsby-transformer-sharp',
		'gatsby-plugin-react-helmet',
		'gatsby-plugin-sharp',
		'gatsby-plugin-image',
		'gatsby-plugin-styled-components',
		{
			resolve: 'gatsby-plugin-sitemap'
		},
		{
			resolve: 'gatsby-source-contentful',
			options: contentfulConfig
		}
	]
};
