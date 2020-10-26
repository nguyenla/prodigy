import React, { Component } from "react";

import Footer from "./Footer";
import Navbar from "./Navbar";
import WelcomeText from "./WelcomeText";

class Home extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div id="main" className="main">
                <Navbar />
                <WelcomeText />
                <Footer />
            </div>
        );
    }
}

export default Home;
