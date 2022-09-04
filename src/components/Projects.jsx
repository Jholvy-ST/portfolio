import { useState, useEffect } from 'react';
import Odinbook from './projects/Odinbook';
import Pinterest from './projects/Pinterest';

const Projects = () => {
	const [tab, setTab] = useState('Odinbook')

	const changeTab = (e) => {
		setTab(e.target.innerText)
	}

	const renderTab = () => {
		if (tab === 'Odinbook') {
			return <Odinbook/>
		} else if (tab === 'Pinterest') {
			return <Pinterest/>
		}
	}

	const highlight = (e) => {
		const items = Array.from(document.getElementsByClassName("projects-item"))
		//e.preventDefault()
		items.forEach( (item) => {
			item.classList.remove("arrow")
			item.style["list-style"] = "disc"
			item.style["text-decoration"] = "none"
		})
		e.target.style["list-style"] = "none"
		e.target.classList.add("arrow")
		e.target.style["text-decoration"] = "underline"
		changeTab(e)
	}

	return (
		<div className="work-container"> 
			<div className="projects">
				<div className="title">
					<h2>My projects</h2>
				</div>
				<div className="projects-list">
					<ul>
						<li onClick={highlight} className='projects-item arrow'>Odinbook</li>
						<li onClick={highlight} className='projects-item'>Pinterest</li>
					</ul>
				</div>
			</div>
			<div className='project-display'>
				{renderTab()}
			</div>
		</div>
	)
}

export default Projects