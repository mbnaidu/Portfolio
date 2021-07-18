import { Grid } from '@material-ui/core';
import React, { Component } from 'react';
import Navbar from '../components/Navbar';
import Social from '../components/Social';
import Map from '../img/map.png';

class Contact extends Component {
    render() {
        return (
            <Grid container direction="row" alignItems="center" justifyContent="center" spacing={2} >
                <Grid item xs={12} sm={3} md={3} lg={3}>
                    <Navbar />
                </Grid>
            <Grid item xs={12} sm={9} md={9} lg={9}>
            <div className="condiv3">
            <h1 className="subtopic">Contact Me</h1>
            <div className="hr_line line2 glass"><div className="inner2 inner3"></div></div>
            <div className="con_out glass" style={{zIndex:1}}><img src={Map} className="co1" style={{minHeight:'10rem'}}></img></div>
            <Grid container direction="row" align="center" justify="center" spacing={2} >
                <Grid item xs={6} sm={5} md={3} lg={3}>
            <a href="#"><div className=" glass" style={{marginTop:'120%',marginRight:'15%',padding:'5%', textAlign:'center',minHeight:'2rem',backgroundColor:'#ffffff', fontSize:20, color:'black'}} >Download Resume</div></a>
            </Grid>
            <Grid item xs={6} sm={5} md={3} lg={3}>
            <a href="mailto:youremail@gmail.com"><div className=" glass" style={{marginTop:'120%',marginLeft:'20%',padding:'5%',minHeight:'2rem',textAlign:'center',backgroundColor:'#ffffff', fontSize:20, width:'7rem', color:'black'}} >Contact Me</div></a>
            </Grid>
            </Grid>
            <div className="hr_line2 line3 glass"><div className="inner3"></div></div>
            <Social />
            </div>
            </Grid>
            </Grid>
            )
        }
    }
    
    export default Contact
    