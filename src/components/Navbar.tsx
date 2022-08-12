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
						<NavbarContainer to='/'>Home</NavbarContainer>

						<NavbarContainer to='/WOMEN'>WOMEN</NavbarContainer>

						<NavbarContainer to='/MEN'>MEN</NavbarContainer>

						<NavbarContainer to='/KIDS'>KIDS</NavbarContainer>
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
