import React, { Component } from 'react';
import project1 from '../img/project1.png';
import project2 from '../img/project2.png';
import project3 from '../img/project3.png';
import project4 from '../img/project4.png';
import pigeon from '../Videos/Pigeon.mp4';
import covid from '../Videos/covid.mp4';
import dental from '../Videos/dental.mp4';
import exam from '../Videos/exam.mp4';
import mydnapedia from '../Videos/mydnapedia.mp4';
import community from '../Videos/community.mp4';
import rangoli from '../Videos/rangoli.mp4';
import myntra from '../Videos/myntra.mp4';



class Portfolio extends Component {
    render() {
        return (
            <div className="condiv">
                <h1 className="subtopic">My Work</h1>
                <div className="hr_line line2 glass">
                    <div className="inner2 inner3"></div>
                </div>
                <div class="port_out port1 glass">
                    <p className="videoheader">PIGEON 🕊️</p>
                    <video width="440" height="205" controls>
                        <source src={pigeon} type="video/mp4"/>
                    </video>
                </div>
                <div class="port_out port2 glass">
                    <p className="videoheader">COVID 🦠</p>
                    <video width="440" height="205" controls>
                        <source src={covid} type="video/mp4"/>
                    </video>
                </div>
                <div class="port_out port3 glass">
                    <p className="videoheader">DENTAL 🦷</p>
                    <video width="440" height="205" controls>
                        <source src={dental} type="video/mp4"/>
                    </video>
                </div>
                <div class="port_out port4 glass">
                    <p className="videoheader">EXAM 📝</p>
                    <video width="440" height="205" controls>
                        <source src={exam} type="video/mp4"/>
                    </video>
                </div>
                <div class="port_out port5 glass">
                    <p className="videoheader">MYDNAPEDIA 🧬</p>
                    <video width="440" height="205" controls>
                        <source src={mydnapedia} type="video/mp4"/>
                    </video>
                </div>
                <div class="port_out port6 glass">
                    <p className="videoheader">COMMUNITY 🧑‍🤝‍🧑</p>
                    <video width="440" height="205" controls>
                        <source src={community} type="video/mp4"/>
                    </video>
                </div>
                <div class="port_out port7 glass">
                    <p className="videoheader">RANGOLI 🤖</p>
                    <video width="440" height="205" controls>
                        <source src={rangoli} type="video/mp4"/>
                    </video>
                </div>
                <div class="port_out port8 glass">
                    <p className="videoheader">MYNTRA 👕</p>
                    <video width="440" height="205" controls>
                        <source src={myntra} type="video/mp4"/>
                    </video>
                </div>
            </div>
            )
        }
    }
    
export default Portfolio
    