import React, { Component } from 'react';


class About extends Component {
    render() {
        return (
            <div className="condiv1">
                <h1 className="subtopic">About Me</h1>
                <div className="hr_line line2 glass">
                    <div className="inner2"></div>
                </div>
                <h3 className="abouthead">Gopisetti Madhu Babu</h3>
                <p>Full Stack Developer  <mark>web &amp; app</mark></p>
                <br></br>
                <p className="p0">
                    <i class="fa fa-graduation-cap" aria-hidden="true"></i>
                    Education
                </p>
                <div className="vr_line glass">
                    <div className="vr_inner inn1"></div>
                    <div className="vr_inner inn2"></div>
                    <div className="vr_inner inn3"></div>
                </div>
                <h4>Bachelor of technology</h4>
                <p className="p1">Vishnu Institute of technology</p>
                <p className="p1">
                    <i class="fa fa-calendar i2"></i>
                    May 2018 - 2022
                </p>
                <p className="p1">75%</p>
                <h4>Higher secondary school</h4>
                <p className="p1">Aditya Junior college</p>
                <p className="p1">
                    <i class="fa fa-calendar i2"></i>
                    May 2018
                </p>
                <p className="p1">90%</p>
                <h4>Secondary school</h4>
                <p className="p1">Narayana E-Techno school</p>
                <p className="p1">
                    <i class="fa fa-calendar i2"></i>
                    May 2016
                </p>
                <p className="p1">90%</p>
                {/* <p className="languages">
                    <i class="fa fa-language" aria-hidden="true"></i>
                    Languages
                </p>
                <h4 className="languagestext">English</h4>
                <h4 className="languagestext">Telugu</h4>
                <h4 className="languagestext">Hindi</h4> */}
                <h3 className="sk_head">Skills</h3>
                <div className="sk glass">REACT JS</div>
                <div className="sk s2 glass">REACT NATIVE</div>
                <div className="sk s3 glass">NODE JS</div>
                <div className="sk s4 glass">MONOG DB</div>
                <div className="sk s5 glass">MY SQL</div>
                <div className="sk s6 glass">SQLITE</div>
                <div className="sk s7 glass">ARDUINO</div>
                <div className="sk s8 glass">FIREBASE</div>
                <div className="sk s9 glass">C</div>
                <div className="sk s10 glass">C++</div>
                <div className="sk s11 glass">C#</div>
                <div className="sk s12 glass">JAVA</div>
                <div className="sk s13 glass">PYTHON</div>
                <div className="sk s14 glass">JAVASCRIPT (ES6)</div>
            </div>
        )
    }
}    
export default About