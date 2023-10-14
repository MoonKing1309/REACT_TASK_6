import './content.css'
import myimage from '../assets/my_image.jpg';
import python from '../assets/python-144.png';
import tf from '../assets/tf-144.png';
import cc from '../assets/c-144.png';
import java from '../assets/java-144.png';



import html from '../assets/html-144.png';
import css from '../assets/css-144.png'
import js from '../assets/js-144.png'
import react from '../assets/react-144.png'
import node from '../assets/node-144.png'
import mongo from '../assets/mongodb-144.png'


function Content()
{
    return(
        <>
            <div className="center-body">
                <div style={{display:'flex', flexDirection:'row',flexWrap:"wrap"}}>
                    <div>
                        <h2>Hello I am,</h2>
                        <h1 style={{fontSize:"50px"}}>Sasidev</h1>
                        <h3>Webdeveloper and Data Analyst</h3>
                    </div>
                    <div style={{ alignItems:'center',justifyItems:"center"}}>
                        <img src={myimage} alt="myimage" style={{width:'450px',height:'450px'}} className="moon"></img>
                    </div>
                </div>

                <div>
                    <h1>My Webdevelopment Repertoire</h1>
                    <div style={{width:'50vw',display:'flex',flexDirection:'row',flexWrap:'wrap'}}>
                        <div>
                            <img className="iconimage" src={html} alt="python" style={{width:'180px'}}></img>
                            <p style={{textAlign:'center',color:'gray'}}>HTML</p>
                        </div>
                        <div>
                            <img className="iconimage" src={css} alt="python" style={{width:'180px'}}></img>
                            <p style={{textAlign:'center',color:'gray'}}>CSS</p>
                        </div>
                        <div>
                            <img className="iconimage" src={js} alt="python" style={{width:'180px'}}></img>
                            <p style={{textAlign:'center',color:'gray'}}>JavaScript</p>
                        </div>
                        <div>
                            <img className="iconimage" src={react} alt="python" style={{width:'180px'}}></img>
                            <p style={{textAlign:'center',color:'gray'}}>REACTJS</p>
                        </div>
                        <div>
                            <img className="iconimage" src={node} alt="python" style={{width:'180px'}}></img>
                            <p style={{textAlign:'center',color:'gray'}}>NODEJS</p>
                        </div>  
                        <div>
                            <img className="iconimage" src={mongo} alt="python" style={{width:'180px'}}></img>
                            <p style={{textAlign:'center',color:'gray'}}>MongoDB</p>
                        </div>
                    </div>
                    
                </div>

                <div>
                    <h1>Other Skills</h1>
                    <div style={{width:'50vw',display:'flex',flexDirection:'row',flexWrap:'wrap'}}>
                        <div>
                            <img className="iconimage" src={python} alt="python" style={{width:'180px'}}></img>
                            <p style={{textAlign:'center',color:'gray'}}>Python</p>
                        </div>
                        <div>
                            <img className="iconimage" src={cc} alt="python" style={{width:'180px'}}></img>
                            <p style={{textAlign:'center',color:'gray'}}>C/C++</p>
                        </div>
                        <div>
                            <img className="iconimage" src={java} alt="python" style={{width:'180px'}}></img>
                            <p style={{textAlign:'center',color:'gray'}}>Java</p>
                        </div>
                        <div>
                            <img className="iconimage" src={tf} alt="python" style={{width:'180px'}}></img>
                            <p style={{textAlign:'center',color:'gray'}}>TensorFlow</p>
                        </div>
                        
                    </div>
                    
                </div>
            </div>
        </>
    )
}

export default Content