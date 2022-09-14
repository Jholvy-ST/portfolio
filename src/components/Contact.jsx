import React, { useRef } from 'react';
import emailjs from 'emailjs-com'

const Contact = () => {
	const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(import.meta.env.VITE_SERVICE_ID, import.meta.env.VITE_TEMPLATE_ID, form.current, import.meta.env.VITE_USER_ID)
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

		showNotification()
		e.target.reset();
  };

	const showNotification = () => {
		const popUp = document.getElementsByClassName("pop-up-container")[0]
		popUp.style.display = "flex"
	}

	//Changes the height of the textarea depending on the content
	const adjustHeight = (e) => {
		if (e) {
			e.target.style.height = "1px";
			e.target.style.height = (e.target.scrollHeight)+"px";
		}
	}
	
	return (
		<div className='contact-container'>
			<div className='centered-div'>
				<h2 className='title'>Get in touch</h2>
				<p className='centered-text'>
					Send me a mail if you're interested in what I do
				</p>
			</div>
			<div className='centered-div'>
				<form className='contact-form' ref={form} onSubmit={sendEmail}>
					<label>Name</label>
					<input type="text" name="user_name" />
					<label>Email</label>
					<input type="email" name="user_email" />
					<label>Message</label>
					<textarea name="message" onInput={adjustHeight}/>
					<input className='form-button' type="submit" value="Send" />
				</form>
			</div>
		</div>
  );
}

export default Contact