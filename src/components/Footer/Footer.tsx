import React from 'react';
import logo from '../../assets/logo.png';
import { Box, Container, Grid, Typography } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
	faFacebook,
	faInstagram,
	faYoutube,
	faLinkedin,
	faWhatsapp,
} from '@fortawesome/free-brands-svg-icons'

const year = new Date().getFullYear();

const Footer = () => (
	<Container maxWidth={false} sx={{ backgroundColor: 'black', py: 6 }}>
		<Grid container sx={{ color: 'white', fontSize: '1em' }}>
			<Grid item xs={12} sm={6} >
				<img width={100} src={logo} />
				<p>Cruzamos barreras para proclamar al Cristo crucificado y resucitado, expresando Su amor y compasión entre aquellos que viven y mueren sin Él.</p>
				<p>Hacemos discípulos que confían y obedecen a Jesús, y llegan a integrarse a iglesias Cristo céntricas.</p>
				<p>Trabajamos en conjunto con las iglesias para cumplir la misión de Dios entre culturas tanto local como globalmente.</p>
				<p>Facilitamos la participación en ministerios transculturales de aquellos a quien Dios está llamando.</p>
			</Grid>
			<Grid item xs={12} sm={6} textAlign='right'>
				<Box display="flex" width='100%' justifyContent="flex-end">
					<Box display="flex" width="240px" justifyContent="space-between">
						<FontAwesomeIcon icon={faFacebook} size="2x" />
						<FontAwesomeIcon icon={faInstagram} size="2x" />
						<FontAwesomeIcon icon={faYoutube} size="2x" />
						<FontAwesomeIcon icon={faLinkedin} size="2x" />
						<FontAwesomeIcon icon={faWhatsapp} size="2x" />
					</Box>
				</Box>
				<p>¿Tienes alguna pregunta? Escríbenos a sim.preguntas@gmail.com</p>
				<p>Escríbenos a sim.preguntas@gmail.com</p>
				<p>Copyright ©<span>{new Date().getFullYear()}</span> SIM Latinoamérica</p>
				<p>Todos Derechos Reservados</p>
			</Grid>
		</Grid>
	</Container >
);

export default Footer;
