import './index.scss'
import AnimatedLetters from '../AnimatedLetters';

const About = () => {
    return (
        <div className="container about-page">
            <div className="text-zone">
                <h1>
                    <AnimatedLetters 
                    strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e ']} 
                    idx={15}/>
                </h1>
                <p>I am an ambitious and skilled software professional with a strong educational background and a passion for impactful product development. My journey encompasses academic achievements, specialized training, and diverse work experiences that highlight My expertise in various technologies and frameworks.</p>
                <p>I aim to exhibit excellence in matters of software-supported product development so that they may be of impact on people. </p>
                <p>My tech stack encompasses a diverse range of cutting-edge tools and frameworks that I have expertly utilized throughout my journey. From spearheading the development of applications using Laravel, REST APIs, MVC Architecture, and Stripe payments integration, to mastering Node.js, Express.js, gRPC, and MongoDB for backend development, my toolkit is a fusion of versatility and proficiency. I've seamlessly integrated Git, Flutter, and WordPress for efficient development, demonstrated my prowess in JavaScript technologies, and excelled in creating dynamic web solutions while consistently delivering seamless user experiences. My tech stack is not just a collection of skills; it's a testament to my commitment to staying at the forefront of innovation in the ever-evolving landscape of software development.</p>
            </div>
        </div>
    )
}

export default About