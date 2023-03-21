import React, { Component } from "react";
import "./App.css";

import Header from "../Header";
import RandomPlanet from "../RandomPlanet";
import ErrorButton from "../ErrorButton/ErrorButton";
import PeoplePage from "../PeoplePage/PeoplePage";
import Error from "../Error/Error";

export default class App extends Component {
    state = {
        hasError: false,
    };

    componentDidCatch(){
        this.setState({hasError: true});
    }

    render() {
        if(this.state.hasError) {
            return <Error/>
        }
        return (
            <div>
                <Header />
                <RandomPlanet />
                <ErrorButton />
                <PeoplePage />
                <PeoplePage />
                <PeoplePage />
            </div>
        );
    }
}
