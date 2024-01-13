import React, { useState } from "react";
import AnimatedLetters from "../AnimatedLetters";
import "./index.scss";
import {
    faCss3,
    faGitAlt,
    faGolang,
    faHtml5,
    faLaravel,
    faNodeJs,
    faPhp,
    faReact,
  } from '@fortawesome/free-brands-svg-icons'
  import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Portfolio = () => { 
    const [letterClass] = useState('text-animate')
    
    return (
    <>
        <div className="container about-page">
            <div className="text-zone">
            <h1>
                <AnimatedLetters
                letterClass={letterClass}
                strArray={['M', 'y', ' ', 'P', 'o', ' r', 't', 'f', 'o', 'l', 'i', 'o']}
                idx={15}
                />
            </h1>
                <p>These projects highlight my expertise and experience in FullStack PHP development, backend application creation, and educational platforms. They underscore my proficiency in a range of technologies, frameworks, and architectural principles.</p>
               <p className="sub-head"><b><big>1. FarijiCare(Online Policy Purchase Application)</big></b></p>
               <p>
               Contributed to FarijiCare's development, focusing on a Frontend User Policy Purchase web App, an Admin Insurer panel (Angular), and a CRM App for authentication and relationship management. Also, worked on a Payment Gateway (NestJS) ensuring secure transactions by integrating with the Daraja API. Check out the application at:https://policy.dawitdigital.com/</p>
                <p className="sub-head"><b><big>2. eBooks Application</big></b></p>
                            <p>
                During my role as a FullStack PHP Developer at Shuzia, I led the development of an eBooks application customized for a vibrant Christian community in Nigeria. I harnessed cutting-edge technologies like Laravel, REST APIs, MVC Architecture, Stripe payments integration, and comprehensive testing. The successful deployment on Digital Ocean ensured a seamless user experience. Explore the eBooks application at: https://books.shuzia.com/</p>
                            
                <p className="sub-head"><b><big>3. Blog Application</big></b></p>
                <p>
Also at Shuzia, I took charge of creating a dynamic blog application tailored for a lively Christian community in Nigeria. Employing technologies such as Laravel, REST APIs, MVC Architecture, Stripe payments integration, and thorough testing, I ensured the application's effectiveness. The seamless deployment on Digital Ocean contributed to a user-friendly experience. Check out the blog application at: https://blog.shuzia.com/</p>
                <p className="sub-head"><b><big>4. Road-Feature Detector Backend Application</big></b></p>
                <p>
During my internship at AMT Technologies, I pioneered the development of a robust backend application for an innovative road-feature detector. I leveraged technologies like Node.js, Express.js, Docker, gRPC, MongoDB, and RESTful web services to ensure efficient communication and scalable data storage.</p>
                <p className="sub-head"><b><big>5. Educational Scholarship Platform</big></b></p>
                <p> 
As a Part-Time Intern at Frog Technologies, I created an educational scholarship platform connecting struggling students with generous donors. By utilizing tools like Git, Laravel, Flutter, and integrating WordPress, I developed a platform that's both user-friendly and functional. I managed API integration, MVC Architecture, database migrations, and enhanced functionality with WordPress integration. Explore the platform at: https://admin.thejf.org/</p>
            </div>

            <div className="stage-cube-cont">
                <div className="cubespinner">
                    <div className="face1">
                    <FontAwesomeIcon icon={faPhp} color="#DD0031" />
                    </div>
                    <div className="face2">
                    <FontAwesomeIcon icon={faLaravel} color="#DD0031" />
                    </div>
                    <div className="face3">
                    <FontAwesomeIcon icon={faNodeJs} color="#DD0031" />
                    </div>
                    <div className="face4">
                    <FontAwesomeIcon icon={faGolang} color="#DD0031" />
                    </div>
                    <div className="face5">
                    <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
                    </div>
                    <div className="face6">
                    <FontAwesomeIcon icon={faHtml5} color="#F06529" />
                    </div>
                    <div className="face7">
                    <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
                    </div>
                    <div className="face8">
                    <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
                    </div>
                </div>
            </div>


        </div>
    </>
    )
}

export default Portfolio;
