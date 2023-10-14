import './footer.css'

function Footer()
{
    return(
        <footer>
            <div style={{display:'flex',flexDirection:'row'}}>
                <div style={{flex:'0.33',padding:'2vw'}}>
                    <h1>
                        About me
                    </h1>
                    <p style={{color:'gray'}} className="about-me">
                        Hi, my name is Sasidev which translates to MoonKing,I have been working with computers all my life and will do my best to prove to be an useful addition to your team.

                    </p>
                </div>
                <div style={{flex:'0.2',padding:'2vw'}}>
                    <h1>
                        Links
                    </h1>
                    <p> <a href='/Home' >Home</a></p>
                    <p> <a href='/Projects'>Projects</a></p>  

                </div>
                <div style={{flex:'0.33',padding:'2vw'}}>
                    <h1>
                        Contact
                    </h1>
                    <p><a target='_blank'href="https://github.com/MoonKing1309">Github</a></p>
                    <p>conorken1@gmail.com</p>
                    <p>India/TamilNadu</p>
                    <p>+91 6381162456</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer;