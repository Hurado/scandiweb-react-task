import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

export const NavbarContainer = styled(NavLink)`
	width: 65px;
	height: 20px;
	font-family: 'Raleway';
	font-style: normal;
	font-weight: 400;
	font-size: 16px;
	line-height: 120%;
	/* display: flex; */
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
		width: 65px;
		height: 20px;
		font-family: 'Raleway';
		font-style: normal;
		font-weight: 600;
		font-size: 16px;
		line-height: 120%;
		align-items: center;
		text-align: center;
		color: #5ece7b;
		text-underline-offset: 32px;
	}
`

export const Container = styled.div`
	position: absolute;
	left: 0%;
	right: 0%;
	top: 0%;
	bottom: 0%;
	display: flex;
	margin-left: 117px;
	margin-bottom: 32px;
	margin-top: 28px;
	background: #ffffff;
`