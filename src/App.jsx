import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, matchRoutes } from 'react-router-dom';
import reactLogo from './assets/react.svg'
import './App.css'
import Nav from './components/Nav';
import About from "./components/About";
import Main from './components/Main';
import Work from './components/Work';
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
		<div className='full-height'>
			<Router>
				<div className="main-container">
					{<Nav/>}
					<Routes>
						<Route path='/' index element={<About/>}/>
						<Route path='/work' element={<Projects/>}/>
						<Route path='/contact' element={<Contact/>}/>
					</Routes>
					{/*<Footer/>*/}
				</div>
			</Router>
		</div>	
  )
}

export default App
