import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, matchRoutes } from 'react-router-dom';
import './App.css'
import Nav from './components/Nav';
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import PopUp from "./components/PopUp";

function App() {
  return (
		<div className='full-height'>
			<Router>
				<PopUp/>
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
