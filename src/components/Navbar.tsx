import { Component } from 'react'
import { Container, NavbarContainer, Wrapper } from '../styles/NavStyle'
import Logo from '../assets/logo.svg'

export default class Navbar extends Component {
	render() {
		return (
			<>
			<Wrapper>

				<Container>
					<NavbarContainer to='/'>Home</NavbarContainer>

					<NavbarContainer to='/WOMEN'>WOMEN</NavbarContainer>

					<NavbarContainer to='/MEN'>MEN</NavbarContainer>

					<NavbarContainer to='/KIDS'>KIDS</NavbarContainer>
				</Container>
					<img src={Logo} alt='logo' />
				
			</Wrapper>
			</>
		)
	}
}
