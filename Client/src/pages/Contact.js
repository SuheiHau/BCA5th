// import React from "react";
// import PizzaLeft from "../assets/pizzaLeft.jpg";
// import "../Styles/Contact.css";

// function Contact() {
//   return (
//     <div className="contact">
//       <div
//         className="leftSide"
//         style={{ backgroundImage: `url(${PizzaLeft})` }}
//       ></div>
//       <div className="rightSide">
//         <h1> Contact Us</h1>

//         <form id="contact-form" method="POST">
//           <label htmlFor="name">Full Name</label>
//           <input name="name" placeholder="Enter full name..." type="text" />
//           <label htmlFor="email">Email</label>
//           <input name="email" placeholder="Enter email..." type="email" />
//           <label htmlFor="message">Message</label>
//           <textarea
//             rows="6"
//             placeholder="Enter message..."
//             name="message"
//             required
//           ></textarea>
//           <button type="submit"> Send Message</button>
//         </form>
//       </div>
//     </div>
//   );
// }
// export default Contact;


// import React from "react";
import PizzaLeft from "../assets/pizzaLeft.jpg";
import "../Styles/Contact.css";
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_a7pe7xa',
      'template_6gcpt2h',
        form.current, {
        publicKey: 'LzH4FOVcpNkNv90PG',
      })
      .then(
        () => {
          console.log('SUCCESS! MSG SEND');
          // Reset the form after successful submission
          form.current.reset();
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <div className="contact">
      <div
        className="leftSide"
        style={{ backgroundImage: `url(${PizzaLeft})` }}
      ></div>
      <div className="rightSide">
        <h1> Contact Us</h1>
        <form ref={form} onSubmit={sendEmail}>
          <label>Name</label>
          <input type="text" name="user_name" />
          <label>Email</label>
          <input type="email" name="user_email" />
          <label>Message</label>
          <textarea name="message" />
          <input type="submit" value="Send" />
        </form>
      </div>
    </div>
  );
}
export default Contact;
