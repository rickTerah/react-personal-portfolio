import React, { Component } from 'react';
import axios from 'axios';
import './Skills.scss';

const categoriesApiEndpoint = 'http://127.0.0.1:2500/api/categories';
const skillsApiEndpoint = 'http://127.0.0.1:2500/api/skills'

class Skills extends Component {
    state = { 
        categories: [],
        skills: []

     }

    async componentDidMount() {
         const { data: categories } = await axios.get(categoriesApiEndpoint);
         const { data: skills } = await axios.get(skillsApiEndpoint);
         this.setState({ categories, skills });
     }

    render() { 
        const { categories, skills } = this.state;
        return ( 
            <React.Fragment>
                { categories.map(category => (
                    <section className="skills" key={ category._id }>
                        <div className="skills-category">
                            <h2 className="skills-category__title">
                                { category.title }
                            </h2>
                            <ul className="skills-list">
                            { skills.filter(s => s.category._id === category._id).map(skill =>(
                                <li className="skills-list__item" key={ skill._id }>
                                    <img className="skills-list__item-image" src={skill.imageUrl} alt={skill.name} />
                                </li>
                            ))}
                            </ul>
                        </div>
                    </section>
                ))}
            </React.Fragment>
        );
    }
}
 
export default Skills;