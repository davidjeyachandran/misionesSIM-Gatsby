import React from 'react';
import logo from './logo-reversed.png'

// components
import { Container, Grid, Typography } from '@mui/material';

// styled components
import * as S from './styles';

const Footer = () => (
	<Container maxWidth={false}>
		<S.Footer>
			<Grid container spacing={2}>
				<Grid item xs={12} sm={6} sx={{ mx: 4 }}>
					<img src={logo} />
					<Typography color="grey" component="p" sx={{ fontSize: '1.1em' }}>
						La visión de SIM es un testimonio de comunidades de creyentes en Jesús entre los pueblos menos alcanzados del mundo.
						Cruzamos barreras para proclamar al Cristo crucificado y resucitado, expresando Su amor y compasión entre aquellos que viven y mueren sin Él.<br />
						Hacemos discípulos que confían y obedecen a Jesús, y llegan a integrarse a iglesias Cristo céntricas.<br />
						Trabajamos en conjunto con las iglesias para cumplir la misión de Dios entre culturas tanto local como globalmente.<br />
						Facilitamos la participación en ministerios transculturales de aquellos a quien Dios está llamando.
					</Typography>
				</Grid>
				<Grid item xs={12} sm={6}>

				</Grid>
			</Grid>
		</S.Footer>
	</Container>
);

export default Footer;
