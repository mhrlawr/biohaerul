import React from 'react';
import './style.css';

const Skills = () => {
    return (
        <div className="skills">
            <h1>Skills</h1>
            <div className="content">
                <div>
                    <strong>Languanges:</strong>
                    <li>Python</li>
                    <li>Node.js</li>
                    <li>Javascript</li>
                </div>

                <div>
                    <strong> Libraries: </strong>
                    <li>Boostrap</li>
                    <li>React.js</li>
                </div>

                <div>
                    <strong> Tools: </strong>
                    <li>Eslint</li>
                    <li>WebPack</li>
                    <li>Chrome Dev</li>
                    <li>Github</li></div>

                <div>
                    <strong> Unit Test: </strong>
                    <li>Jest</li>
                    <li>Enzyme</li>
                    <li>React-test</li>
                    <li>SuperTest</li>
                </div>
            </div>
        </div>
    );
};

export default Skills;