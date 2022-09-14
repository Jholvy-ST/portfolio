import { useEffect } from "react"

const About = () => {
	useEffect( () => {
		//document.getElementById("main-title").classList.add("underlined")
	}, [])

	return (
		<div className="about-container">
			<div className="centered-div">
				<div id="main-title" className="main-title centered-text">
					<h2>Welcome</h2>
				</div>
				<div className="centered-text">
					<p>
						My name is Jholvy, I am a junior web developer
					</p>
				</div>
			</div>
		</div>
	)
}

export default About