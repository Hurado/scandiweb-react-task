import { Component } from 'react'
import { Container, ContainerType, NavbarContainer, ContainerFunctional } from '../styles/NavStyle'
import Logo from '../assets/logo.svg'
import ShoppingCart from '../assets/shopping-cart.svg'
import CurrencyChanger from '../assets/currency-changer.svg'




export default class Navbar extends Component {
	render() {
		return (
			<Container>
					<ContainerType>
						<NavbarContainer to='/ALL'>ALL</NavbarContainer>

						<NavbarContainer to='/CLOTHES'>CLOTHES</NavbarContainer>

						<NavbarContainer to='/TECH'>TECH</NavbarContainer>
					</ContainerType>
					<img src={Logo} alt='logo' />
					<ContainerFunctional>
						<img src={CurrencyChanger} alt='currencychanger' />
						<img src={ShoppingCart} alt='shoppingCart' />
					</ContainerFunctional>
				</Container>
		)
	}
}
