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
                    <a href="https://github.com/vikalp2502/Shoes-Nike-Landing-page">
                        <img src={project2} className="po1"></img>
                    </a>
                </div>
                <div class="port_out port8 glass">
                    <a href="https://github.com/vikalp2502/To-do-list-v2">
                        <img src={project3} className="po1"></img>
                    </a>
                </div>
                <div class="port_out port9 glass">
                    <a href="https://github.com/vikalp2502/AlgoSort-Sorting-Visualiser">
                        <img src={project1} className="po1"></img>
                    </a>
                </div>
                <div class="port_out port10 glass">
                    <a href="https://github.com/vikalp2502/Shoes-Nike-Landing-page">
                        <img src={project2} className="po1"></img>
                    </a>
                </div>
                <div class="port_out port11 glass">
                    <a href="https://github.com/vikalp2502/To-do-list-v2">
                        <img src={project3} className="po1"></img>
                    </a>
                </div>
                <div class="port_out port12 glass">
                    <a href="https://github.com/vikalp2502/Tribute-to-msd">
                        <img src={project4} className="po1"></img>
                    </a>
                </div> 
            </div>
            )
        }
    }
    
export default Portfolio
    