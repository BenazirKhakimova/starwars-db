export default class SwapiService {
    _apiBase = "https://swapi.dev/api/";

    getResponses = async (url) => {
        const res = await fetch(`${this._apiBase}${url}`);
        if (!res.ok)
            throw new Error(`Could not find ${url}, reseived ${res.status}`);
        return res.json();
    };

    getAllPeople = async () => {
        let res = await this.getResponses(`people`);
        return  res.results.map(this._transformPerson);
    };
    getPeople = async (id) => {
        const person = await this.getResponses(`people/${id}/`);
        return this._transformPerson(person)
    };
    getAllPlanets = async () => {
        let res = await this.getResponses(`planets`);
        return res.results.map(this._transformPlanet);
    };
    getPlanet = async (id) => {
        const planet = await this.getResponses(`planets/${id}/`);
        return this._transformPlanet(planet);
    };
    getAllStarships = async () => {
        let res = await this.getResponses(`starships`);
        return res.results.map(this._transformStarShip);
    };
    getStarship = async (id) => {
        const starShip = await this.getResponses(`starships/${id}/`);
        return this._transformStarShip(starShip);
    };
    _extructId = (item) => {
        const regExp = /\/([0-9]*)\/$/;
        return item.url.match(regExp)[1];
    };
    _transformPlanet = (planet) => {
        return {
            id: this._extructId(planet),
            planetName: planet.name,
            population: planet.population,
            rotationPeriod: planet.rotation_period,
            diameter: planet.diameter,
        };
    }
    _transformStarShip = (starShip) => {
        return {
            id: this._extructId(starShip),
            name: starShip.name,
            model: starShip.model,
            manufacturer: starShip.manufacturer,
            costInCredits: starShip.costInCredits,
            length: starShip.length,
            crew: starShip.crew,
            passengers: starShip.passengers,
            cargoCapacity: starShip.cargoCapacity,
        };
    }
    _transformPerson = (person) => {
        return {
            id: this._extructId(person),
            name: person.name,
            gender: person.gender,
            birthYear: person.birth_year,
            eyeColor: person.eye_color,
        };
    }
}
