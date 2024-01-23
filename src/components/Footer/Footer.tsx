import React from 'react';
import logo from '../../assets/logo.png';
import { Box, Container, Grid } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
	faFacebook,
	faInstagram,
	faYoutube,
	faWhatsapp,
} from '@fortawesome/free-brands-svg-icons'

const year = new Date().getFullYear();
const iconStyle = { color: '#eee' };

const Footer = () => (
	<Container maxWidth={false} sx={{ backgroundColor: 'black', py: 6 }}>
		<Container maxWidth='lg'>
			<Grid container sx={{ color: 'white', fontSize: '1em' }}>
				<Grid item xs={12}><img alt='SIM Logo' width={100} src={logo} /></Grid>
				<Grid item xs={12} md={6} >
					<p>Cruzamos barreras para proclamar al Cristo crucificado y resucitado, expresando Su amor y compasión entre aquellos que viven y mueren sin Él.</p>
					<p>Hacemos discípulos que confían y obedecen a Jesús, y llegan a integrarse a iglesias Cristo céntricas.</p>
					<p>Trabajamos en conjunto con las iglesias para cumplir la misión de Dios entre culturas tanto local como globalmente.</p>
					<p>Facilitamos la participación en ministerios transculturales de aquellos a quien Dios está llamando.</p>
				</Grid>
				<Grid item xs={12} md={6} textAlign='right'>
					<Box display="flex" width='100%' justifyContent="flex-end" sx={{ pt: 2 }}>
						<Box display="flex" width="240px" justifyContent="space-between">
							<a href="https://www.facebook.com/SIMLatinoamerica/" target="_blank" style={iconStyle}>
								<FontAwesomeIcon icon={faFacebook} size="2x" />
							</a>
							<a href="https://www.instagram.com/simlatinoamerica/" target="_blank" style={iconStyle}>
								<FontAwesomeIcon icon={faInstagram} size="2x" />
							</a>
							<a href="https://www.youtube.com/user/VamosSIM" target="_blank" style={iconStyle}>
								<FontAwesomeIcon icon={faYoutube} size="2x" />
							</a>
							<FontAwesomeIcon icon={faWhatsapp} size="2x" />
						</Box>
					</Box>
					<p>¿Tienes alguna pregunta? Escríbenos a <a href="mailto:sim.preguntas@gmail.com" target="_blank">sim.preguntas@gmail.com</a></p>
					<p>Copyright ©<span>{new Date().getFullYear()}</span> SIM Latinoamérica</p>
					<p>Todos Derechos Reservados</p>
				</Grid>
			</Grid>
		</Container>
	</Container >
);

export default Footer;
