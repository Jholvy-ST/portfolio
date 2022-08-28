import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, matchRoutes } from 'react-router-dom';
import reactLogo from './assets/react.svg'
import './App.css'
import Nav from './components/Nav'
import Main from './components/Main';
import Work from './components/Work';
import Contact from "./components/Contact";

function App() {
  return (
		<div className='full-height'>
			<Router>
				<div className='main-container'>
					<Nav/>
					<Routes>
						<Route path='/' index element={<Main/>}/>
						<Route path='/work' element={<Work/>}/>
						<Route path='/contact' element={<Contact/>}/>
					</Routes>
				</div>
			</Router>
		</div>	
  )
}

export default App
