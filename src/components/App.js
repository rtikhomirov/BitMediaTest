import React, {Component} from "react";
import 'bootstrap/dist/css/bootstrap.css';
import Main from './MainComponent';
import '../css/App.css'
import '../css/Stats.css'
import {BrowserRouter} from "react-router-dom";

class App extends Component{
    render() {
        return (
            <BrowserRouter>
                <Main />
            </BrowserRouter>
        )
    }
}

export default App