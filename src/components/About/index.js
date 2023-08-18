import { useState } from 'react'
// import {
//   faCss3,
//   faGitAlt,
//   faGolang,
//   faHtml5,
//   faLaravel,
//   faNodeJs,
//   faPhp,
//   faReact,
// } from '@fortawesome/free-brands-svg-icons'
import AnimatedLetters from '../AnimatedLetters'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './index.scss'

const About = () => {
    const [letterClass] = useState('text-animate')



    return (
    <>
        <div className="container about-page">
            <div className="text-zone">
            <h1>
                <AnimatedLetters
                letterClass={letterClass}
                strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
                idx={15}
                />
            </h1>
                <p>I am an ambitious and skilled software professional with a strong educational background and a passion for impactful product development. My journey encompasses academic achievements, specialized training, and diverse work experiences that highlight My expertise in various technologies and frameworks.</p>
                <p>I aim to exhibit excellence in matters of software-supported product development so that they may be of impact on people. </p>
                <p>My tech stack encompasses a diverse range of cutting-edge tools and frameworks that I have expertly utilized throughout my journey. From spearheading the development of applications using Laravel, REST APIs, MVC Architecture, and Stripe payments integration, to mastering React.js, Node.js, Express.js, gRPC, and MongoDB for backend development, my toolkit is a fusion of versatility and proficiency. I've seamlessly integrated Git, Flutter, and WordPress for efficient development, demonstrated my prowess in JavaScript technologies, and excelled in creating dynamic web solutions while consistently delivering seamless user experiences. My tech stack is not just a collection of skills; it's a testament to my commitment to staying at the forefront of innovation in the ever-evolving landscape of software development.</p>
            </div>

            {/* <div className="stage-cube-cont">
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
            </div> */}
        </div>
    </>
    )
}

export default About