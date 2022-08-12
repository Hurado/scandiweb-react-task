import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

export const Container = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 100%;
`

export const NavbarContainer = styled(NavLink)`
	/* width: 65px;
	height: 20px; */
	font-family: 'Raleway';
	font-style: normal;
	font-weight: 400;
	font-size: 16px;
	line-height: 120%;
	display: flex;
	align-items: center;
	text-align: center;
	text-transform: uppercase;
	color: #1d1f22;
	flex: none;
	order: 0;
	flex-grow: 0;
	font-size: 16px;
	line-height: 19.2px;
	align-items: center;
	text-decoration: none;

	&.active {
		text-decoration: underline;
		/* width: 65px;
		height: 20px; */
		font-family: 'Raleway';
		font-style: normal;
		font-weight: 600;
		font-size: 16px;
		line-height: 120%;
		align-items: center;
		text-align: center;
		color: #5ece7b;
		text-underline-offset: 200%;
	}
`

export const ContainerType = styled.span`
	left: 0%;
	right: 0%;
	top: 0%;
	gap:17.5%;
	bottom: 0%;
	display: flex;
	margin-left: 10.2%;
	margin-bottom: 3.1%;
	margin-top: 2.7%;
	background: #ffffff;
`

export const ContainerFunctional = styled.span`
	display: inline-flex;
	justify-content: space-between;
	margin-right:9.1%;
	gap: 22px;
`
