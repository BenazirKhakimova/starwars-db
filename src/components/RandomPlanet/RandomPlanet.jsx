import React, { Component } from "react";
import SwapiService from "../../SwapiService.js";
import Spinner from "../Spinner/Spinner.jsx";
import PlanetView from "./PlanetView.jsx";
import "./RandomPlanet.css";
import Error from "../Error/Error.jsx";

export default class RandomPlanet extends Component {
    swapiService = new SwapiService();

    state = {
        planet: {},
        loading: true,
    };

    componentDidMount() {
        this.updatePlanet();
        this.interval = setInterval(this.updatePlanet, 5000);
    }
    onPlanetLoaded = (planet) => {
        this.setState({ planet, loading: false });
    };
    onError = (error) => {
        this.setState({ error: true, loading: false });
    };
    updatePlanet = () => {
        const id = Math.floor(Math.random() * 25) + 3;
        this.swapiService
            .getPlanet(id)
            .then(this.onPlanetLoaded)
            .catch(this.onError);
    }

    render() {
        const { planet, loading, error } = this.state;
        const hasData = !(loading || error);
        const spinner = loading ? <Spinner /> : null;
        const errorMassage = error ? <Error /> : null;
        const content = hasData ? <PlanetView planet={planet} /> : null;
        return (
            <div className="random-planet jumbotron rounded">
                {spinner}
                {errorMassage}
                {content}
            </div>
        );
    }
}
