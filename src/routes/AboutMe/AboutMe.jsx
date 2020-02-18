import React from 'react';
import headshot from '../../headshot.png'
import styles from './AboutMe.module.scss';

export default function AboutMe() {
  return (
    <main className={styles.aboutMe}>
        <section>
            <div className={styles.headshotWrapper}>
                <img src={headshot} className={styles.headshot} alt="headshot" title="headshot" />
            </div>
            <h1>Hey I'm Chuda (pronounced chew-duh), nice to meet you!</h1>
            <p className={styles.headingDetails}>Software Engineer &#8226; (404)395-0107 &#8226; choochoo7@gmail.com</p>
            <p>Talented front end developer and occasional designer, looking to further my career in full stack web development and design. Experienced in leveraging creativity and logic to create functional web applications that maintain visual appeal. Skilled at leveraging strong core skills in HTML/CSS/JavaScript in modern architectures.</p>
        </section>
        <section>
            <h2>Developer’s Toolbox</h2>
            <p>React &#8226; AngularJS &#8226; NodeJS &#8226; Express &#8226; Redux &#8226; D3.js &#8226; JavaScript &#8226; Semantic HTML/HTML5 &#8226; SASS &#8226; Drupal &#8226; PHP &#8226; Java &#8226; Python &#8226; MongoDB &#8226; PostgreSQL &#8226; SQL &#8226; Jest/Enzyme &#8226; Docker &#8226; UI & UX Design &#8226; Data Visualization Design &#8226; Prototyping & Wireframing &#8226; Adobe Creative Suite &#8226; Git &#8226; Webpack</p>
        </section>
        <section>
            <h2>Professional Experience</h2>
            <h3>FISERV (Alpharetta, GA)</h3>
            <p className={styles.details}>Software Engineer III, 04/2019 to present</p>
            <p className={styles.details}>Software Engineer II, 09/2018-04/2019</p>
            <p>Integral member of the Experience Technology team, whose primary function is to enhance the frontend solutions across one of Fiserv’s primary business cores. Worked across two primary applications on implementing UI’s designed by third-party agency, while drawing from those code bases to develop a UI catalog of components.</p>
            <ul>
                <li>Team Lead on efforts to refresh the user experience of personal/business banking application, based on third-party designs. Worked with a team of three other frontend engineers in an agile environment, creating semi-responsive desktop workflows. Large focus on accessibility, clean code, and testing.</li>
                <li>Created proof of concept apps for React implementations with basic Node/Express backends, custom Webpack implementations, Docker containerization, and Styleguidist customization, among others.</li>
                <li>Assisted with the architecture and creation of design system to be used primarily across Bank Solutions. Helped speak to technical feasibility, accessibility, and general aesthetics during component design.</li>
            </ul>
            <h3>Georgia Tech Research Institute (Atlanta, GA)</h3>
            <p className={styles.details}>Research Scientist I, 12/2014 to 7/2018</p>
            <p className={styles.details}>Tech Temp, 08/2014-12/2014</p>
            <p className={styles.details}>Student Assistant, 06/2014-08/2014</p>
            <p>Member of the Advanced Algorithm’s and Analytics branch in the Innovative Computing division. Role included fast-paced immersion in several different development environments and teams, with experience including UI/UX design, data analytics and visualization, and website development.</p>
            <ul>
                <li>Team Lead on design and development for DiamondEye, a data analytics and visualization dashboard leveraging open source software, AngularJS, and Python. Application was designed to ingest data, perform data analysis, and allow users to view visualizations of the processed data and publish API URL’s.</li>
                <li>Designed and implemented in-depth user interface remodel for the HOST website and the CDAIT Members Only Page in Drupal/PHP. Created and designed heat-map web application using JavaScript and mapping libraries.</li>
                <li>Worked on the ARFAM suite of projects, helping army families across the nation with communication and organization via various connected web applications. Apps based on Drupal/PHP or AngularJS.</li>
                <li>Project Manager for internally funded starter project—multivariate IOT data visualization via AngularJS/D3.js.</li>
            </ul>
            <h3>MOBILE APPLICATION AND DEVELOPMENT CENTER (Kennesaw, GA)</h3>
            <p className={styles.details}>Intern, 2012-2014</p>
            <p>Team Lead on web development project for Metro Atlanta Chamber of Commerce’s “Mobile Atlanta” initiative.</p>
        </section>
        <section>
            <h2>Education</h2>
            <h3>KENNESAW STATE UNIVERSITY (Kennesaw, GA), BS in Computer Science 2010-2014</h3>
            <p>Senior Project­—teamed up to develop interactions and visualizations for GTRI’s Python-based Pydava Project.</p>
        </section>
    </main>
  );
};