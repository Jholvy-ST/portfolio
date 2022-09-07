const Odinbook = () => {
	return (
			<div className="project">
				<div>
					<div className="centered-div">
						<img src="https://drive.google.com/uc?export=view&id=16O36K2NZZ6nj06tf7qY1zgTFtZ9VyC_n" alt="odinbook image" />
					</div>
					<div>
						<h3 className="title">Odinbook</h3>
						<p>
							Simple Facebook copy written in React that works by getting the data from a REST API. This project was made to complete the NodeJS course of <a href="https://www.theodinproject.com/" style={{textDecoration: "underline"}}>The Odin Project</a>.
						</p>
					</div>
				</div>
				<div className="project-links">
					<div className="project-link-code">
						<a href="https://github.com/Jholvy-ST/react-odinbook">Code</a>
					</div>
					<div className="project-link-demo">
						<a href="">Demo</a>
					</div>
				</div>
			</div>
	)
}

export default Odinbook