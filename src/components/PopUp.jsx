const PopUp = () => {
	const hideNotification = () => {
		const popUp = document.getElementsByClassName("pop-up-container")[0]
		popUp.style.display = "none"
	}

	return (
		<div className="pop-up-container">
			<div className='pop-up centered-div centered-text'>
				<h3 className='title'>The message has been sent</h3>
				<button className='pop-up-button' onClick={hideNotification}>Accept</button>
			</div>
		</div>
	)
}

export default PopUp