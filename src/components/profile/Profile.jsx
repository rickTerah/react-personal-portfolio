import React from 'react';
import './Profile.scss';

const profile = (props) => {
    return ( 
    <section className="profile">
        <div className="logo-box">
            <img className="profile-img" src="https://image.flaticon.com/icons/svg/1197/1197409.svg" alt="My Business Logo" />
        </div>
        <div className="text-box">
           <h2 className="text-box__name">
               Mwangi Patrick N.
           </h2>
           <br />
           <h3 className="text-box__title">
               Full Stack Web Developer & Data Scientist
           </h3>
           <br />
           <br />
           <div className="text-box__description">
            Hello I am a Web Developer, Database Developer and Data analyst.  I have exceptional technical and analytical skills, with experience in website development, data analysis, database management, 
            information system support, machine learning and server support. 
           </div>
        </div>
    </section>
     );
}
 
export default profile;