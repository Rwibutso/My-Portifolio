import "./contact.css"
import phone from "../../img/phone.png"
import email from "../../img/email.png"
import addres from "../../img/addres.png"
import din from "../../img/din.png"
import hub from "../../img/hub.png"
import { useContext, useRef, useState } from "react";
import emailjs from 'emailjs-com';
import { ThemeContext } from "../../context";


const Contact = () => {
    const formRef = useRef()
    const [done, setDone] = useState(false)
    const theme = useContext(ThemeContext);
    const darkMode = theme.state.darkMode;

    const handleSubmit = (e) => {
        e.preventDefault()

        emailjs.sendForm('service_ggch7yp', 'template_p0dkvyj', formRef.current, 'ekTZL0TCD7vImYGIl')
        .then((result) => {
            console.log(result.text);
            setDone(true)
        }, (error) => {
            console.log(error.text);
        });
    }
    return(
        <div className="c">
            <div className="c-bg"></div>
            <div className="c-wrapper">
                <div className="c-left">
                    <h1 c-tittle>let's discuss your project</h1>
                    <div classname="c-info">
                        <div className="c-info-item">
                            <img src={phone} alt="" className="c-icon"/>
                            +250 780536126
                        </div>
                        <div className="c-info-item">
                            <img src={email} alt="" className="c-icon"/>
                            rwibuserge@gmail.com
                        </div>
                        <div className="c-info-item">
                            <img src={addres} alt="" className="c-icon"/>
                            KN8 Ave 27 kacyiru kinamba
                        </div>
                        <div className="c-info-item">
                            <img src={din} alt="" className="c-icon"/>
                            <a href="https://www.linkedin.com/in/rwibutso-serge-4444211b8/" target={"_blank"} style={{color: darkMode && "#9999ff"}}>https://www.linkedin.com/in/rwibutso-serge-4444211b8/</a>
                                                    </div>
                        <div className="c-info-item">
                            <img src={hub} alt="" className="c-icon"/>
                            <a href="https://github.com/Rwibutso" target={"_blank"} style={{color: darkMode && "#9999ff"}} >https://github.com/Rwibutso</a>
                        </div>
                    </div>
                </div>
                <div className="c-right">
                    <p className="c-desc">
                        <b>What's your story?</b> Get in touch. Always available for freelancing if the right project  comes ak
                        long me.
                    </p>
                    <form ref={formRef} onSubmit={handleSubmit}>
                        <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder="Name" name="user_name"  className="c-input"/>
                        <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder="Subject" name="user_subject" className="c-input"/>                        
                        <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder="Email" name="user_email" className="c-input"/>
                        <textarea style={{backgroundColor: darkMode && "#333"}} rows="5" placeholder="meassage" name="message"/>
                        <button className="">Submit</button>
                        {done && "Thank you..."}
                    </form>
                </div>
            </div>
        </div>
    )
}
export default Contact;