import React, { Component } from 'react'
import { Routes, Route } from 'react-router-dom'
import KIDS from './pages/KIDS'
import WOMEN from './pages/WOMEN'
import MEN from './pages/MEN'
import NavBar from './components/Navbar'
import Home from './pages/Home'



export default class App extends Component {
	render() {
		return (
			<>
				<NavBar />
				<Routes>
					<Route path='/' element={<Home/>} />
					<Route path='/WOMEN' element={<WOMEN />} />
					<Route path='/MEN' element={<MEN />} />
					<Route path='/KIDS' element={<KIDS />} />
				</Routes>
			</>
		)
	}
}
