import React from "react";
import style from "./Contact.module.css";
import icon1 from "../images/icons/icon1.png";
import icon2 from "../images/icons/icon2.png";
import icon3 from "../images/icons/icon3.png";
const Contact = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const fullName = formData.get('fullName');
        const email = formData.get('email');
        const subject = formData.get('subject');
        const message = formData.get('message');
    
        if (fullName=="" || email=="") {
          alert('Full Name and Email are required.');
          return;
        }
    
        console.log('Form Data:', {
          fullName,
          email,
          subject,
          message,
        });
        alert('Your message has been sent successfully!');
      };
    return(
        <section id="contacts" class={style.contactSection}>
            <section>
                <h1>Leave ME Your Info</h1>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="FullName">Your Full Name (Required)</label>
                    <input type="text" name="fullName" required/>
                    <label htmlFor="Email">Your Email (Required)</label>
                    <input type="email" name="email" required/>
                    <label htmlFor="Subject">Subject</label>
                    <input type="text" name="subject" />
                    <label htmlFor="Message">Your Message</label>
                    <textarea name="message"></textarea>
                    <button type="submit">SEND MESSAGE</button>
                </form>
            </section>
            <aside>
                <h1>Contact Information</h1>
                <div>
                    <div>
                        <div>
                            <img src={icon1} alt="icon1" />
                        </div>
                        <div>
                            <p>Country:</p>
                            <p>India</p>
                        </div>
                        <div>
                            <p>City:</p>
                            <p>Gonda City</p>
                        </div>
                        <div>
                            <p>Streat:</p>
                            <p>Indra Nagar,Circular Road</p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <img src={icon2} alt="icon2" />
                        </div>
                        <div>
                            <p>Email:</p>
                            <p>amt312002@gmail.com</p>
                        </div>
                        <div>
                            <p>Skype:</p>
                            <p>@Anoop_Kumar</p>
                        </div>
                        <div>
                            <p>Telegram:</p>
                            <p>@Anoop_Kumar_31</p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <img src={icon3} alt="icon3" />
                        </div>
                        <div>
                            <p>Support Service:</p>
                            <p>7055</p>
                        </div>
                        <div>
                            <p>Office:</p>
                            <p>+91 (0)798 534 5837</p>
                        </div>
                        <div>
                            <p>Personal:</p>
                            <p>+91 (0)798 534 5837</p>
                        </div>
                    </div>
                </div>
            </aside>
        </section>
    );
}
export default Contact;