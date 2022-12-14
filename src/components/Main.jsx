import imgSection from '../assets/imgs/illustration-intro.png';
import acessImg from '../assets/imgs/icon-access-anywhere.svg';
import iconSecurity from '../assets/imgs/icon-security.svg';
import iconCollaboration from '../assets/imgs/icon-collaboration.svg';
import iconAnyFile from '../assets/imgs/icon-any-file.svg';
import illustrationStayProductive from '../assets/imgs/illustration-stay-productive.png';
import profile1 from '../assets/imgs/profile-1.jpg';
import profile2 from '../assets/imgs/profile-2.jpg';
import profile3 from '../assets/imgs/profile-3.jpg';
import iconArrow from '../assets/imgs/icon-arrow.svg';

export function Main() {
    return (
        <div className="">
            <div className='container bg-curvey'>
                <div className='main'>
                    <img className='img-hero' src={imgSection} alt="illustration-intro" />
                    <h1>All your files in one secure location, <br /> accessible anywhere.</h1>

                    <p>Fylo stores all your most important files in one secure location.
                        <br /> Access them wherever you need, share and collaborate with
                        <br /> friends family, and co-workers.</p>
                    <button>Get Started</button>
                </div>
            </div>
            <div className='grid container'>
                <div className="grid-items">
                    <img src={acessImg} alt="acessImg" />
                    <strong>Access your files, anywhere</strong>
                    <p>The ability to use a smartphone, tablet, or computer <br /> to access your account means your files follow you <br /> everywhere.</p>
                </div>
                <div className="grid-items">
                    <img src={iconSecurity} alt="iconSecurity" />
                    <strong>Security you can trust</strong>
                    <p>2-factor authentication and user-controlled encryption are <br /> just a couple of the security features we allow to help <br /> secure your files.</p>
                </div>
                <div className="grid-items">
                    <img src={iconCollaboration} alt="iconCollaboration" />
                    <strong>Real-time collaboration</strong>
                    <p>Securely share files and folders with friends, family and <br /> colleagues for live collaboration. No email attachments <br /> required.</p>
                </div>
                <div className="grid-items">
                    <img src={iconAnyFile} alt="iconAnyFile" />
                    <strong>Store any type of file</strong>
                    <p>Whether you're sharing holidays photos or work <br /> documents, Fylo has you covered allowing for all file <br /> types to be securely stored and shared.</p>
                </div>
            </div>
            <div className='chat-section container'>
                <div>
                    <img className='img-hero' src={illustrationStayProductive} alt="illustrationStayProductive" />
                </div>
                <div className='productive'>
                    <h1>Stay productive, <br /> wherever you are</h1>
                    <p>Never let location be an issue when accessing your files. Fylo has you <br /> covered for all of your file storage needs.</p>
                    <p>Securely share files and folders with friends, family and colleagues for live <br /> collaboration. No email attachments required.</p>
                    <a href="#">See how Fylo works <img src={iconArrow} alt='right arrow'/></a>
                </div>
            </div>
            <div className='container comments'>
                <div className='bg-quotes'>
                    <div className='comment'>
                        <p>
                            Fylo has improved our team productivity by <br /> an order of magnitude. Since making the <br /> switch our team has become a well-oiled <br /> collaboration machine.
                        </p>
                        <div className='user-info'>
                            <img src={profile1} width={40} height={40} alt='profile1'/>
                            <div>
                                <strong>Satish Patel</strong>
                                <p>Founder & CEO, Huddle</p>
                            </div>
                        </div>
                    </div>
                    <div className='comment'>
                        <p>
                            Fylo has improved our team productivity by <br /> an order of magnitude. Since making the <br /> switch our team has become a well-oiled <br /> collaboration machine.
                        </p>
                        <div className='user-info'>
                            <img src={profile2} alt='profile2' width={40} height={40} />
                            <div>
                                <strong>Bruce McKenzie</strong>
                                <p>Founder & CEO, Huddle</p>
                            </div>
                        </div>
                    </div>
                    <div className='comment'>
                        <p>
                            Fylo has improved our team productivity by <br /> an order of magnitude. Since making the <br /> switch our team has become a well-oiled <br /> collaboration machine.
                        </p>
                        <div className='user-info'>
                            <img src={profile3} alt='profile3' width={40} height={40} />
                            <div>
                                <strong>Iva Boyd</strong>
                                <p>Founder & CEO, Huddle</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='container comunicate'>
                <div className='comunicate-section'>
                    <h1>Get early access today</h1>
                    <p>It only takes a minute to sign up and our free starter tier is extremely generous. If you have any <br /> questions, our support team would be happy to help you.</p>
                    <div>
                        <form action="/add" method='post'>
                            <input type="email" placeholder='email@example.com' />
                            <button type='submit'>Get Started For Free</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}