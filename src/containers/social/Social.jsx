import React, { Component } from 'react';
import './Social.scss';
import icons from '../../assets/icons/sprite.svg';

class Social extends Component {
    state = {  }
    render() { 
        return ( 
        <section className="social">
            <ul className="social-icons">
                <li className="social-list"><a className="social-link" rel="noopener noreferrer" target="_blank" href="https://www.quora.com/profile/PATRICK-MWANGI-the-Terah">
                    <svg className="social-icon linkedin-icon">
                        <use xlinkHref={`${icons}#${'icon-linkedin2'}`} />
                    </svg>
                <p>LinkedIn</p>
                </a></li>
                <li className="social-list"><a className="social-link" rel="noopener noreferrer" target="_blank" href="https://github.com/Terahpatrick">
                <svg className="social-icon github-icon">
                    <use xlinkHref={`${icons}#${'icon-github'}`} />
                </svg>
                <p>Github</p>
                </a></li>
                <li className="social-list"><a className="social-link" rel="noopener noreferrer" target="_blank" href="mailto:patrickmwangi554@gmail.com">
                    <svg className="social-icon mail-icon">
                        <use xlinkHref={`${icons}#${'icon-envelop'}`} />
                    </svg>
                <p>Gmail</p>
                </a></li>
                <li className="social-list"><a className="social-link" target="_blank" rel="noopener noreferrer" href="https://www.quora.com/profile/PATRICK-MWANGI-the-Terah">
                    <svg className="social-icon quora-icon">
                        <use xlinkHref={`${icons}#${'icon-quora'}`} />
                    </svg>
                <p>Quora</p>
                </a></li>
                <li className="social-list"><a className="social-link" rel="noopener noreferrer" target="_blank" href="https://www.quora.com/profile/PATRICK-MWANGI-the-Terah">
                    <svg className="social-icon resume-icon">
                        <use xlinkHref={`${icons}#${'icon-profile'}`} />
                    </svg>
                <p>Resume</p>
                </a></li>
            </ul>
        </section>
         );
    }
}
 
export default Social;