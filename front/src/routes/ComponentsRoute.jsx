import About from "../components/Homepages/About"
import Contact from "../components/Homepages/Contact"
import Education from "../components/Homepages/Education"
import Experience from "../components/Homepages/Experience"
import Header from "../components/Homepages/Header"
import Projects from "../components/Homepages/Projects"
import Login from "../components/Homepages/Login"

//AdminComponent
import Admin from "../components/AdminComponents/Admin"

//EditorComponent
import EditAbout from "../components/EditComponents/EditAbout"
import EditEducation from "../components/EditComponents/EditEducation"
import EditExperience from "../components/EditComponents/EditExperience"
import EditProjects from "../components/EditComponents/EditProjects"


import {Routes,Route, BrowserRouter} from 'react-router-dom'
import React from 'react'
import Navbar from "../components/Homepages/Navbar"
import Footer from "../components/Homepages/Footer"

const ComponentsRoute = () => {
    return <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path='/' element= {
                <>
                    <Header/>
                    <About/>
                    <Education/>
                    <Projects/>
                    <Experience/>
                    {/* <Contact/> */}
                </>
                } 
                />
                <Route path='/Login' element= {<Login/>} />
                <Route path='/Admin' element= {<Admin/>} />
                <Route path='/edit/:id' element= {<EditAbout/>} />
                <Route path='/editEducation/:id' element= {<EditEducation/>} />
                <Route path='/editExperience/:id' element= {<EditExperience/>} />
                <Route path='/editProjects/:id' element= {<EditProjects/>} />
            </Routes>
            {/* <Footer /> */}
        </BrowserRouter>
}

export default ComponentsRoute

