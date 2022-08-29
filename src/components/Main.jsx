const Main = () => {
	return (
		<div className="full-height">
			<div className="centered-div">
				<div className="title">
					<h2>I'm Jholvy</h2>
				</div>
				<div className="centered-text">
					<p>
						I am a junior web developer
					</p>
				</div>
			</div>
			<div className="technologies-container">
				<div className="centered-div">
					<div className="title centered-text">
						<h2>Technologies I use</h2>
					</div>
				</div>
				<div className="technologies-grid grid-container">
					<div className="technology centered-div">
						<div className="technology-img">
							<img src="https://drive.google.com/uc?export=view&id=16O36K2NZZ6nj06tf7qY1zgTFtZ9VyC_n" alt="javascript logo"/>
						</div>
						<h3>JavaScript</h3>
					</div>
					<div className="technology centered-div">
						<div className="technology-img">
							<img src="https://drive.google.com/uc?export=view&id=1Ua-NSDZE9pQs4-Mnj9696Sd5fmM0_vKJ" alt="react logo"/>
						</div>
						<h3>React</h3>
					</div>
					<div className="technology centered-div last-tech">
						<div className="technology-img">
							<img src="https://drive.google.com/uc?export=view&id=1qc1Kudfwa0DOYqGmI_hxil3DAKOR88GL" alt="nodejs logo"/>
						</div>
						<h3>NodeJS</h3>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Main