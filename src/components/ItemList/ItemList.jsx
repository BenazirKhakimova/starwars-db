import React, { Component } from "react";
import SwapiService from "../../SwapiService";
import Spinner from "../Spinner/Spinner";
import "./ItemList.css";

export default class ItemList extends Component {
    swapiService = new SwapiService();

    state = {
        peopleList: [],
    };

    componentDidMount() {
        this.swapiService
            .getAllPeople()
            .then((peopleList) => this.setState({ peopleList }));
    }

    renderList = (peopleList) => {
        return peopleList.map(({ id, name }) => {
            return (
                <li
                    key={id}
                    className="list-group-item"
                    onClick={() => this.props.onItemSelected(id)}
                >
                    {name}
                </li>
            );
        });
    };

    render() {
        const { peopleList } = this.state;
        const peoples = this.renderList(peopleList);
        if (peopleList.length === 0) {
            return <Spinner />;
        }
        return <ul className="item-list list-group">{peoples}</ul>;
    }
}
