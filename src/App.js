import React from "react";
import Intro from "./components/Intro";
import Projects from "./components/Projects";
import AboutMe from "./components/AboutMe";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import "./App.css";
import { render } from "@testing-library/react";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hidden: false,
        };
        this.prev = window.pageYOffset;
    }

    componentDidMount() {
        window.addEventListener("scroll", () => {
            let cur = window.pageYOffset;
            if (cur > this.prev && !this.state.hidden) {
                this.setState({ hidden: true });
            } else if (cur <= this.prev && this.state.hidden) {
                this.setState({ hidden: false });
            }
            this.prev = cur;
        });
    }

    render() {
        return (
            <div className="app">
                <Navbar hidden={this.state.hidden} />
                <Intro />
                <Projects />
                <AboutMe />
                <Contact />
            </div>
        );
    }
}

export default App;
