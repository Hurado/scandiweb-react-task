import { Component } from 'react'
import { Container, NavbarContainer } from '../styles/NavStyle'

export default class Navbar extends Component {
	render() {
		return (
			<>
				<Container>
					<NavbarContainer to='/'>Home</NavbarContainer>

					<NavbarContainer to='/WOMEN'>WOMEN</NavbarContainer>

					<NavbarContainer to='/MEN'>MEN</NavbarContainer>

					<NavbarContainer to='/KIDS'>KIDS</NavbarContainer>
				</Container>
			</>
		)
	}
}
