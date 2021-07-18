import React, { Component } from 'react';
import project1 from '../img/project1.png';
import project2 from '../img/project2.png';
import project3 from '../img/project3.png';
import project4 from '../img/project4.png';
import pigeon from '../Videos/Pigeon.mp4';
import covid from '../Videos/covid.mp4';
import dental from '../Videos/dental.mp4';
// import exam from '../Videos/exam.mp4';
import mydnapedia from '../Videos/mydnapedia.mp4';
import { Grid } from '@material-ui/core';
// import community from '../Videos/community.mp4';
// import rangoli from '../Videos/rangoli.mp4';
// import myntra from '../Videos/myntra.mp4';
import Navbar from '../components/Navbar';




class Portfolio extends Component {
    render() {
        return (
            <Grid container direction="row" alignItems="center" justifyContent="center" spacing={2} >
                <Grid item xs={12} sm={4} md={3} lg={3}>
                    <Navbar />
                </Grid>
                
                <Grid item xs={12} sm={12} md={9} lg={9}>
            <Grid container direction="row" alignItems="center" justifyContent="center" spacing={3} >
                <Grid item xs={10} sm={10} md={8} lg={8} >
            <div className="condivportfolio">
                <h1 className="subtopic">My Work</h1>
                <div className="hr_line line2 glass">
                    <div className="inner2 inner3"></div>
                </div>
                <Grid container direction="row" alignItems="center" justifyContent="center" spacing={3} >
                
                <Grid item xs={10} sm={11} md={11} lg={11} >
                <div className="port_outportfolio port1 glassportfolio">
                    <p className="videoheader">COVID 🦠</p>
                    <video  height="160" controls style={{width:'100%'}} controls>
                        <source src={covid} type="video/mp4"/>
                    </video>
                </div>
                </Grid>
                <Grid item xs={10} sm={11} md={11} lg={11} >
                <div className="port_outportfolio glassportfolio">
                    <p className="videoheader">DENTAL 🦷</p>
                    <video height="160" controls style={{width:'100%'}} controls>
                        <source src={dental} type="video/mp4"/>
                    </video>
                </div>
                </Grid>
                <Grid item xs={10} sm={11} md={11} lg={11} >
                <div className="port_outportfolio glassportfolio">
                    <p className="videoheader">MYDNAPEDIA 🧬</p>
                    <video height="160" controls style={{width:'100%'}} controls>
                        <source src={mydnapedia} type="video/mp4"/>
                    </video>
                </div>
                </Grid>
                <Grid item xs={10} sm={11} md={11} lg={11} >
                <div className="port_outportfolio  glassportfolio">
                    <p className="videoheader">PIGEON 🕊️</p>
                    <video height="160" controls style={{width:'100%'}}>
                        <source src={pigeon} type="video/mp4"/>
                    </video>
                </div>
                
                </Grid>
                </Grid>
                {/* 
                 */}
                {/* <div class="port_out port4 glass">
                    <p className="videoheader">EXAM 📝</p>
                    <video width="440" height="205" controls>
                        <source src={exam} type="video/mp4"/>
                    </video>
                </div> */}
                {/* <div class="port_out port5 glass">
                    <p className="videoheader">MYDNAPEDIA 🧬</p>
                    <video width="440" height="205" controls>
                        <source src={mydnapedia} type="video/mp4"/>
                    </video>
                </div> */}
                {/* <div class="port_out port6 glass">
                    <p className="videoheader">COMMUNITY 🧑‍🤝‍🧑</p>
                    <video width="440" height="205" controls>
                        <source src={community} type="video/mp4"/>
                    </video>
                </div> */}
                {/* <div class="port_out port7 glass">
                    <p className="videoheader">RANGOLI 🤖</p>
                    <video width="440" height="205" controls>
                        <source src={rangoli} type="video/mp4"/>
                    </video>
                </div> */}
                {/* <div class="port_out port8 glass">
                    <p className="videoheader">MYNTRA 👕</p>
                    <video width="440" height="205" controls>
                        <source src={myntra} type="video/mp4"/>
                    </video>
                </div> */}
            </div>
            </Grid>
            </Grid>
            </Grid>
            </Grid>
            )
        }
    }
    
export default Portfolio
    