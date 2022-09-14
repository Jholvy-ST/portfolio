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

	useEffect( () => {
		underline()
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

	const underline = () => {
		const items = Array.from(document.getElementsByClassName("nav-item"))
		items.forEach(link => link.classList.remove("underlined"))
		//e.target.parentElement.parentElement.classList.add("underlined")
		const pathname = window.location.pathname;
		const lastPart = pathname.split("/").pop();

		if (lastPart !== '') {
			document.getElementById(lastPart).classList.add("underlined")
		} else {
			document.getElementById('about').classList.add("underlined")
		}
	}

	return (
		<div className="header">
			<div className="header-title">
				<h2>Jholvy ST</h2>
			</div>
			<div className="mobile-menu">
				<div>
					<a aria-label="github" href="https://github.com/Jholvy-ST">
						<i className="fa fa-github"></i>
					</a>
				</div>
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
			<div className="desktop-menu">
				<div className="nav">
					<div id="about" className="nav-item">
						<h3 onClick={underline}>
							<Link to='/' className='linkD'>About</Link>
						</h3>
					</div>
					<div id="work" className="nav-item">
						<h3 onClick={underline}>
							<Link to='/work' className='linkD'>Work</Link>
						</h3>
					</div>
					<div id="contact" className="nav-item">
						<h3 onClick={underline}>
							<Link to='/contact' className='linkD'>Contact</Link>
						</h3>
					</div>
				</div>
				<div>
					<a aria-label="github" href="https://github.com/Jholvy-ST">
						<i className="fa fa-github"></i>
					</a>
				</div>
			</div>
		</div>
	)
}

export default Nav