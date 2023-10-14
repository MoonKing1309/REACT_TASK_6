import './projects.css'
import sp from '../assets/sp.png'
import titanic from '../assets/titanic.jpg'
import dt from '../assets/dt.jpg'
import ecoli from '../assets/ecoli.jpg'
import wine from '../assets/wine.jpg'




function Projects()
{
    return(
        <div className='projects-body'>
                <div style={{display:'flex',paddingBottom:'10vh'}}>
                    <div className='project-image'>
                        <img src={sp} alt="SocketProgamming" width={'450px'} height={'250px'}></img>
                    </div>
                    <div className='project-card'>
                        <h1 className='project-card-title'>
                        MultiThreaded Chat Application
                        </h1>

                        <p className='project-card-text'>
                        To use python socket programming to create a client-server based chat application and host it using ngrok services.
                        </p>

                        <p className='project-card-text'>
                            <a className='project-card-link' href='https://github.com/MoonKing1309/ChatApplication'> 
                                Repo
                            </a>

                        </p>
                    </div>  
                </div>
                <div style={{display:'flex',paddingBottom:'10vh'}}>
                    <div className='project-image'>
                        <img src={titanic} alt="titanic" width={'450px'} height={'250px'}></img>
                    </div>
                    <div className='project-card'>
                        <h1 className='project-card-title'>
                        Titanic Dataset 
                        </h1>

                        <p className='project-card-text'>
                        To use machine learning to create a model that predicts which passengers survived the Titanic shipwreck.
                        </p>

                        <p className='project-card-text'>
                            <a className='project-card-link' href='https://www.kaggle.com/code/moonking1309/titanic-mk-8-5-23'> 
                                Kaggle
                            </a>
                            
                        </p>
                    </div>  
                </div>
                <div style={{display:'flex',paddingBottom:'10vh'}}>
                    <div className='project-image'>
                        <img src={dt} alt="dt" width={'450px'} height={'250px'}></img>
                    </div>
                    <div className='project-card'>
                        <h1 className='project-card-title'>
                        Decision Tree Error Reduction

                        </h1>

                        <p className='project-card-text'>
                        To reduce the error rate induced by gini in a decision tree classifier using other classifiers.
                        </p>

                    </div>  
                </div>
                <div style={{display:'flex',paddingBottom:'10vh'}}>
                    <div className='project-image'>
                        <img src={ecoli} alt="ecoli" width={'450px'} height={'250px'}></img>
                    </div>
                    <div className='project-card'>
                        <h1 className='project-card-title'>
                        Ecoli Dataset
                        </h1>

                        <p className='project-card-text'>
                        To use machine learning to create a model to predict the cellular localisation sites of protein. Accuracy - 0.8712. <br></br>After implementing Decision tree error reduction insights : Accuracy - 0.9306.
                        </p>
                    </div>  
                </div>
                <div style={{display:'flex',paddingBottom:'10vh'}}>
                    <div className='project-image'>
                        <img src={wine} alt="wine" width={'450px'} height={'250px'}></img>
                    </div>
                    <div className='project-card'>
                        <h1 className='project-card-title'>
                        Wine Dataset
                        </h1>
                        <p className='project-card-text'>
                        To use machine learning to create a model that predicts the quality of any given wine. Accuracy - 0.8314                       
                        </p>
                    </div>  
                </div>
        </div>
    )
}

export default Projects