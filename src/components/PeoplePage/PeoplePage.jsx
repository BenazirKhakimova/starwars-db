import React, { PureComponent } from 'react';
import Error from '../Error/Error';
import ItemList from '../ItemList';
import PersonDetails from '../PersonDetails';
import  './PeoplePage.css';

class PeoplePage extends PureComponent {
    state = {
        selectedId: 1,
        hasError: false,
    };

    onSelected = (id) => {
        this.setState({ selectedId: id });
    };

    componentDidCatch(){
      this.setState({ hasError: true });
    }
    render() {
        if (this.state.hasError) {
            return <Error/>
        }
        return (
            <div className="row mb2">
                <div className="col-md-6 item-list">
                    <ItemList onItemSelected={this.onSelected} />
                </div>
                <div className="col-md-6">
                    <PersonDetails selectedId={this.state.selectedId} />
                </div>
            </div>
        );
    }
}

export default PeoplePage;
