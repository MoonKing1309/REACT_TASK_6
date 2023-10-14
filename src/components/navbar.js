import './navbar.css'
import menuicon from '../assets/hamburger-30.png';
import closeicon from '../assets/close-24.png';
import linkedicon from '../assets/linkedin-30.png'
import githubicon from '../assets/github-30.png'
import kaggleicon from '../assets/kaggle-30.png'
import resumeicon from '../assets/resume-30.png'
import resume from '../assets/Resume.pdf';


import {useState} from 'react'

function Navbar()
{
    const [rightview,setRightview] = useState(false)
    function openRightMenu()
    {
        setRightview(!rightview)
    }
    function closeRightMenu()
    {
        setRightview(!rightview)
    }
    function resumeClick()
    {
        window.open(resume);
    }
    return(
        <div>
            <nav>
                <div className="navbar-left">
                    <ul>
                        <li> <a href='/Home' >Home</a></li>
                        <li> <a href='/Projects'>Projects</a></li>  
                    </ul>
                </div>
                <div className="navbar-right">
                    <ul>
                        <li><img src={menuicon} onClick={openRightMenu} style={{cursor:"pointer"}} alt="menuicon"></img></li>
                    </ul>
                    <div className={rightview?'right-side-menu':'right-side-menu-disabled'}>
                            <div style={{display:"flex",paddingLeft:"1vw",}}>
                                <div style={{display:"flex",justifyContent:"flex-start",width:'50%'}}>
                                    <p style={{fontWeight:"700",fontSize:'larger'}}>Sasidev</p>
                                </div>
                                <div style={{display:"flex",justifyContent:"flex-end",width:'50%',paddingTop: '15px',paddingRight:'15px'}} >
                                    <img className="closeicon" alt="close" src={closeicon} width={'24px'} height={'24px'} onClick={closeRightMenu}></img>
                                </div>
                            </div>
                            <hr></hr>
                            <div className='rightSideNav'>
                                <ul>
                                    <li style={{display:"flex"}}>
                                        <div style={{display:'flex',alignItems:'center'}}>
                                            <img alt="Linkedin" src={linkedicon} width={'30px'} height={'30px'}></img>
                                        </div>
                                        <div style={{display:'flex',justifyContent:'center',flex:'1'}}>
                                            <h4> <a target='_blank'href="https://www.linkedin.com/in/sasidev-i-8b8b17256/">LinkedIn</a></h4>
                                        </div>
                                    </li>
                                    <li style={{display:"flex"}}>
                                        <div style={{display:'flex',alignItems:'center'}}>
                                            <img alt="Linkedin" src={githubicon} width={'30px'} height={'30px'}></img>
                                        </div>
                                        <div style={{display:'flex',justifyContent:'center',flex:'1'}}>
                                            <h4> <a target='_blank'href="https://github.com/MoonKing1309">Github</a></h4>
                                        </div>
                                    </li>
                                    <li style={{display:"flex"}}>
                                        <div style={{display:'flex',alignItems:'center'}}>
                                            <img alt="Linkedin" src={kaggleicon} width={'30px'} height={'30px'}></img>
                                        </div>
                                        <div style={{display:'flex',justifyContent:'center',flex:'1'}}>
                                            <h4> <a target='_blank'href="https://www.kaggle.com/moonking1309">Kaggle</a></h4>
                                        </div>
                                    </li>
                                    <li style={{display:"flex"}}>
                                        <div style={{display:'flex',alignItems:'center'}}>
                                            <img alt="Linkedin" src={resumeicon} width={'30px'} height={'30px'}></img>
                                        </div>
                                        <div style={{display:'flex',justifyContent:'center',flex:'1'}}>
                                            <h4 onClick={resumeClick} style={{cursor:'pointer'}}>Resume</h4>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                    </div>
                </div>
               
            </nav>
        </div>
    )
}

export default Navbar;