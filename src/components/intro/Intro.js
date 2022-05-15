import "./intro.css"
import srg3 from "../../img/srg3.png"
const Intro = () => {
    return(
        <div className="i">
            <div className="i-left">
                <div className="i-wrapper">
                    <h2 className="i-intro">Hello, My name is</h2>
                    <h1 className="i-name">Serge </h1>
                    <p className="i-desc">
                     I am a software developer with robust
                     problem-solving skills and proven experience
                     in creating and designing software in a test-
                     driven environment.
                    
                    </p>
                    
                    <div className="i-tittle">
                        <div className="i-tittle-wrapper">
                            <div className="i-tittle-item">Python-Django</div>
                            <div className="i-tittle-item">React-Js</div>
                            <div className="i-tittle-item">React-Native</div>
                            <div className="i-tittle-item">machine Learning</div>
                            <div className="i-tittle-item">Web design</div>
                        </div>
                    </div>
                    
                </div>
            </div>
            <div className="i-right">
                <div className="i-bg"></div>
                <img src={srg3} alt="" className="i-img"/>
            </div>  
        </div>
    )
}
export default Intro;
