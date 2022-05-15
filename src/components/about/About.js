import "./about.css"
import serge from "../../img/serge.jpeg"

const About = () => {
    return(
        <div className="a">
            <div className="a-left">
                <div className="a-card-bg"></div>
                <div className="a-card">
                    <img src={serge} alt="" className="a-wraper-img"></img>
                </div>
            </div>
            <div className="a-right">
                <div className="a-wrapper">
                  <h1 className="a-tittle">About Me</h1>

                  <p className="a-sub">
                  A highly motivated junior developer in Django, React JS, React Native and machine learning, 
                  with emphasis on backend functionalities. 
                  
                  </p>
                  <p className="a-desc">
                  I am a full stack developer with work and internships experience from 
                  eBD developers working with Web design and SolvIT Africa using Django as backend developer. 
                   
                  </p>
                </div>
            </div>
        </div>
    )
}
export default About;