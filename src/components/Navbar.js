import React, { Component } from 'react';
import Navitem from './Navitem';
import profilepic from '../img/profile_photo.jpg';
import ReactTypingEffect from 'react-typing-effect';

class Navbar extends Component {
    constructor(props)
    {
        super(props);
        this.state={
            'NavItemActive':''
        }
    }
    activeitem=(x)=>
    {
        if(this.state.NavItemActive.length>0){
            document.getElementById(this.state.NavItemActive).classList.remove('active');
        }
        this.setState({'NavItemActive':x},()=>{
            document.getElementById(this.state.NavItemActive).classList.add('active');
        });
    };
    render() {
        return (
            <nav className="glass">
                <img src={profilepic} className="profilepic"></img>
                <h2>
                    Madhu Babu
                </h2>
                <h6>
                    <ReactTypingEffect className="typingeffect" text={['Full Stack WEB Developer','Full Stack APP Developer','A Data Scientist']} speed={100} eraseDelay={900}/>
                </h6>
                <ul>
                    <Navitem item="About" tolink="/"  activec={this.activeitem}></Navitem>
                    <Navitem item="Portfolio" tolink="/portfolio"  activec={this.activeitem}></Navitem>
                    <Navitem item="Contact" tolink="/contact"  activec={this.activeitem}></Navitem>
                </ul>
            </nav>
            )
        }
    }
    
    export default Navbar
    