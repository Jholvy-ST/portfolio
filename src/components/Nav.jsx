import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Nav = () => {
	//Adds listener for the showDrop function
	useEffect( () => {
		const drop = document.getElementById("root");
		drop.addEventListener('click', showDrop)	
		
		return () => {
			drop.removeEventListener('click', showDrop)
		} 
	}, [])
	
	//Hides the header's dropdown menu when the user clicks elsewhere
	const showDrop = (e) => {
		if (!e.target.matches('.menu-icon')) {
			const myDropdown = document.getElementById("myDropdown");
			if (myDropdown.classList.contains('show')) {
				myDropdown.classList.remove('show');
			}
		}
	}

	//Shows the header's dropdown menu
	const showMenu = () => {
		document.getElementById("myDropdown").classList.toggle("show");
	}

	return (
		<div className="header">
			<div className="header-title">
				<h2>Jholvy ST</h2>
			</div>
			<div>
				<div className="dropdown">
						<div onClick={showMenu}>
							<h2 className="menu-icon">&#9776;</h2>
						</div>
						<div className="dropdown-content" id="myDropdown">
							<Link to='/' className='linkD'>About</Link>
							<hr />
							<Link to='/work' className='linkD'>Work</Link>
							<hr />
							<Link to='/contact' className='linkD'>Contact</Link>
						</div>
					</div>
			</div>
		</div>
	)
}

export default Nav