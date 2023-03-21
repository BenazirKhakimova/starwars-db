import React, { Component } from "react";
import SwapiService from "../../SwapiService";
import ErrorButton from "../ErrorButton/ErrorButton";
import Spinner from "../Spinner/Spinner";

import "./PersonDetails.css";

export default class PersonDetails extends Component {
    swapiService = new SwapiService();

    state = {
        selected: null,
        loading: false
    };

    componentDidMount() {
        this.updatePerson();
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.props.selectedId !== prevProps.selectedId) {
            this.updatePerson();
        }
    }

    updatePerson = () => {
        const { selectedId } = this.props;
        if (!selectedId) {
            return;
        }
        this.setState({loading: true});

        this.swapiService.getPeople(selectedId).then((people) => {
            this.setState({ selected: people,loading: false });
        });
    };

    render() {
        if (!this.state.selected || this.state.loading) {
            return (
                <div className="details-spinner">
                    <Spinner />
                </div>
            );
        }
        const { id, name, gender, birthYear, eyeColor } = this.state.selected;
        return (
            <div className="person-details card">
                <img
                    className="person-image"
                    src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`}
                    alt="#"
                />
                <div className="card-body">
                    <ErrorButton />
                    <h4>{name}</h4>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">
                            <span className="term">Gender</span>
                            <span>{gender}</span>
                        </li>
                        <li className="list-group-item">
                            <span className="term">Birth Year</span>
                            <span>{birthYear}</span>
                        </li>
                        <li className="list-group-item">
                            <span className="term">Eye Color</span>
                            <span>{eyeColor}</span>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}
