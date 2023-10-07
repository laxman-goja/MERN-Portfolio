import React from 'react'
import Typewriter from "typewriter-effect"
import Portfolio from '../../images/portfolio.jpg'
import Image from '../../images/image.jpg'


const Header = () => {

    return (

        <React.Fragment>
            <div className="header">
                <div className="particle" >
                    <div className='background-image'>
                        <img src={Portfolio} alt='image' height= '550px' width= '100%'></img>
                    </div>
                    <div className="fullName">
                        <h1 >
                            <Typewriter options={{
                                strings: ['Laxman Goja Shrestha'],
                                autoStart: true,
                                loop: true,
                            }} />
                        </h1>
                    </div>
                    <div className="cv">
                        <span><b>Cv:</b> <a href="#" target='_blank' rel='noreferrer'><i className='fas fa-file-pdf'></i></a></span>
                    </div>
                    <div className="personalInfo">
                        <div className="personalInfo-center">
                            <div className="personalInfo-details">
                                <div className="info">
                                    <label htmlFor="name">FullName:</label>
                                    <h4 >Laxman Goja Shrestha</h4>
                                    <label htmlFor="occupation">Occupation:</label>
                                    <h4 >Coder</h4>
                                    <label htmlFor="email">Email:</label>
                                    <h4 >luckyshrestha444@gamil.com</h4>
                                </div>
                            </div>
                            <div className="personalInfo-img">
                                <img src={Image} alt="profile" />
                            </div>
                        </div>
                    </div>
                </div>




            </div>
        </React.Fragment>
    )
}

export default Header
