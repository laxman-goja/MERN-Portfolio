import React from 'react'
import Project from '../../images/project.jpg'

const Projects = () => {
    return (
        <div className="main-container">
        <div className="projects">
            <h2 className="title" >Project</h2>
            <div className="projects-center">
                <div className="single-project">
                    <div className="single-project-img">
                        <img src={Project} alt="project"  />
                    </div>
                    <div className="single-project-info">
                        <h3>E-commerce project</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio eos laboriosam consequatur sint praesentium, aspernatur fuga porro corrupti dolores! Tenetur neque, officia voluptatibus magnam repellat odio consequatur voluptates aliquam recusandae.</p>
                    </div>
                </div>
                <div className="single-project">
                    <div className="single-project-img">
                        <img src={Project} alt="project"  />
                    </div>
                    <div className="single-project-info">
                        <h3>E-commerce project</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio eos laboriosam consequatur sint praesentium, aspernatur fuga porro corrupti dolores! Tenetur neque, officia voluptatibus magnam repellat odio consequatur voluptates aliquam recusandae.</p>
                    </div>
                </div>
                <div className="single-project">
                    <div className="single-project-img">
                        <img src={Project} alt="project"  />
                    </div>
                    <div className="single-project-info">
                        <h3>E-commerce project</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio eos laboriosam consequatur sint praesentium, aspernatur fuga porro corrupti dolores! Tenetur neque, officia voluptatibus magnam repellat odio consequatur voluptates aliquam recusandae.</p>
                    </div>
                </div>
                <div className="single-project">
                    <div className="single-project-img">
                        <img src={Project} alt="project"  />
                    </div>
                    <div className="single-project-info">
                        <h3>E-commerce project</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio eos laboriosam consequatur sint praesentium, aspernatur fuga porro corrupti dolores! Tenetur neque, officia voluptatibus magnam repellat odio consequatur voluptates aliquam recusandae.</p>
                    </div>
                </div>
            </div>
            
        </div>
    </div>
    )
}

export default Projects
