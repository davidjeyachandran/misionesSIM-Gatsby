import React from 'react';
import logo from './logo-reversed.png'
import { Container, Grid, Typography } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
	faFacebook,
	faInstagram,
	faYoutube,
	faLinkedin,
	faWhatsapp,
} from '@fortawesome/free-brands-svg-icons'

const Footer = () => (
	<Container maxWidth={false} sx={{ backgroundColor: 'black' }}>
		<Grid container >
			<Grid item xs={12} sm={6} height='100' sx={{ backgroundColor: 'yellow' }}>

				Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusamus, dolorum! Fugiat dicta magnam tempore est eos quo quaerat enim eaque ex porro culpa, cumque sint, obcaecati suscipit earum nulla. Saepe?
			</Grid>
			<Grid item xs={12} sm={6} height='100' sx={{ backgroundColor: 'lime' }}>
				Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus sit, inventore sunt a ullam provident quod adipisci quibusdam? Doloremque, repellat soluta odit fugiat temporibus voluptate explicabo? Voluptatum iusto aspernatur cumque.
			</Grid>
		</Grid>
		<Grid container sx={{ color: 'white', fontSize: '1em' }}>
			<Grid item xs={12} sm={6} >
				<img src={logo} />
				<p>Cruzamos barreras para proclamar al Cristo crucificado y resucitado, expresando Su amor y compasión entre aquellos que viven y mueren sin Él.</p>
				<p>Hacemos discípulos que confían y obedecen a Jesús, y llegan a integrarse a iglesias Cristo céntricas.</p>
				<p>Trabajamos en conjunto con las iglesias para cumplir la misión de Dios entre culturas tanto local como globalmente.</p>
				<p>Facilitamos la participación en ministerios transculturales de aquellos a quien Dios está llamando.</p>
			</Grid>
			<Grid item xs={12} sm={6}>
				<FontAwesomeIcon icon={faFacebook} size="2x" />
				<FontAwesomeIcon icon={faInstagram} size="2x" />
				<FontAwesomeIcon icon={faYoutube} size="2x" />
				<FontAwesomeIcon icon={faLinkedin} size="2x" />
				<FontAwesomeIcon icon={faWhatsapp} size="2x" />

				¿Tienes alguna pregunta? Escríbenos a sim.preguntas@gmail.com

			</Grid>
		</Grid>
	</Container>
);

export default Footer;
