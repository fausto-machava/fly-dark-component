import imgSection from '../assets/imgs/illustration-intro.png';

export function Main(){
    return(
        <div className="container bg-curvey">
            <div className='main'>
                <img src={imgSection} alt="illustration-intro" />

                <h1>All your files in one secure location, <br /> accessible anywhere.</h1>

                <p>Fylo stores all your most important files in one secure location. 
                <br /> Access them wherever you need, share and collaborate with 
                <br /> friends family, and co-workers.</p>

                <button>Get Started</button>
            </div>
        </div>
    )
}