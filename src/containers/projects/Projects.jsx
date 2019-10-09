import React, { Component } from 'react';
import axios from 'axios';
import './Projects.scss';

const apiEndpoint = 'http://127.0.0.1:2500/api/projects';

class Projects extends Component {
    state = { 
        projects: []
     }
    
     async componentDidMount() {
        const  { data: projects }  = await axios.get(apiEndpoint);
        this.setState({ projects });
     }

    render() { 
        const { projects } = this.state;
        return (
        <React.Fragment>
        {projects.map(project => (
        <div className="project" key={project._id}>
            <div className="project-item ">
                <div className="project-banner">
                    <img className="project-banner__image" src={project.imageUrl} alt="convnet" />
                    <div className="project-banner__links">
                        <a className="project-live" href={project.liveUrl} className="link link--inactive" target="_blank" rel="noopener noreferrer">
                            <i  className="fas fa-desktop"></i>
                            <span>Live</span>
                        </a>
                        <a className="project-source" href={project.sourceUrl} target="_blank" rel="noopener noreferrer" className="link">
                            <i className="fas fa-code-branch"></i>
                            <span>Source</span>
                        </a>
                    </div>
                </div>
                <div className="project-text">
                    <h3 className="project-text__title">{project.title}</h3>
                    <p className="project-text__description">{project.description}</p>
                </div>
            </div>
        </div> ))}
        </React.Fragment>
         );
    }
}
 
export default Projects;