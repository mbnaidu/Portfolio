import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route,} from "react-router-dom";
import Navbar from './components/Navbar';
import About from './contents/About';
import Portfolio from './contents/Portfolio';
import Contact from './contents/Contact';


function App() {
	return (
		<Router>
			<div className="App">
				<Navbar />
				<Route exact path="/">
					<About />
				</Route>
				<Route path="/portfolio">
					<Portfolio />
				</Route>
				<Route path="/contact">
					<Contact />
				</Route>
			</div>
		</Router>
		);
	}
export default App;