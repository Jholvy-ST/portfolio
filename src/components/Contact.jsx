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

		e.target.reset();
  };

	//Changes the height of the textarea depending on the content
	const adjustHeight = (e) => {
		if (e) {
			e.target.style.height = "1px";
			e.target.style.height = (e.target.scrollHeight)+"px";
		}
	}
	
	return (
		<div className='centered-div'>
			<h2 className='title'>Contact me</h2>
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
    
  );
}

export default Contact