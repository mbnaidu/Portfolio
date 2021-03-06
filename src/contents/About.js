import { Grid } from '@material-ui/core';
import React, { Component } from 'react';
import '../App2.css'
import Navbar from '../components/Navbar';
class About extends Component {
    render() {
        return (
            <>
                <Grid container align="center" spacing={2}>
                    <Grid item xs={12}sm={12} md={4} lg={3}>
                        <div style={{marginTop: '20%'}}>
                            <Navbar />
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={12} md={8} lg={8}>
                        <div className="condiv1" style={{width:'90%'}}>
                            <h1 className="subtopic">About Me</h1>
                            <div className="hr_line line2 glass">
                                <div className="inner2"></div>
                            </div>
                            <h3 className="abouthead">Gopisetti Madhu Babu</h3>
                            <p style={{marginBottom:'5%'}}>Full Stack Developer  <mark>web &amp; app</mark></p>
                            <br></br>
                            <Grid container direction="row" spacing={10}>
                                <Grid item xs={12} sm={11} md={6} lg={6} >
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
                                </Grid>
                                <Grid irem xs={12} sm={12} md={6} lg={6} style={{marginTop:'5%',marginBottom:'10%'}}>
                                    <Grid container direction="row" spacing={2} align="center" justify="center">
                                        <Grid item xs={12}>
                                            <div className="glass sk1" style={{paddingTop:15}}>REACT JS</div>
                                            <div className="glass sk1" style={{paddingTop:15,marginLeft:'-3%'}}>REACT NATIVE</div>
                                        </Grid>
                                        <Grid item xs={12}>
                                            <div className="glass sk1" style={{paddingTop:15}}>NODEJS</div>
                                            <div className="glass sk1" style={{paddingTop:15,marginLeft:'-3%'}}>MONGODB</div>
                                        </Grid>
                                        <Grid item xs={12}>
                                            <div className="glass sk1" style={{paddingTop:15}}>SQLITE</div>
                                            <div className="glass sk1" style={{paddingTop:15,marginLeft:'-3%'}}>ARDUINO</div>
                                        </Grid>
                                        <Grid item xs={12}>
                                            <div className="glass sk1" style={{paddingTop:15}}>C</div>
                                            <div className="glass sk1" style={{paddingTop:15,marginLeft:'-3%'}}>C++</div>
                                        </Grid>
                                        <Grid item xs={12}>
                                            <div className="glass sk1" style={{paddingTop:15}}>Java</div>
                                            <div className="glass sk1" style={{paddingTop:15,marginLeft:'-3%'}}>PYTHON</div>
                                        </Grid>
                                        <Grid item xs={12}>
                                            <div className="glass sk1" style={{paddingTop:15}}>JAVASCRIPT(ES6)</div>
                                            <div className="glass sk1" style={{paddingTop:15,marginLeft:'-3%'}}>FIREBASE</div>
                                        </Grid>
                                    </Grid>
                                </Grid> 
                            </Grid>
                        </div>
                    </Grid>
                </Grid>
            </>
        )
    }
}    
export default About